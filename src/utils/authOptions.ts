import { cookies } from 'next/headers';

import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import FacebookProvider from 'next-auth/providers/facebook';
import LinkedInProvider from 'next-auth/providers/linkedin';

import { MongoClient } from 'mongodb';
import { tokenService } from 'utils/services/token-service';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? '',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? '',
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID ?? '',
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? '',
      authorization: {
        params: { scope: 'openid profile email' },
      },
      issuer: 'https://www.linkedin.com',
      jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
      profile(profile, tokens) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user }) {
      try {
        const client = new MongoClient(process.env.MONGO_URI!);
        const usersCollection = client.db().collection('users');

        const userData = await usersCollection.findOne({
          email: user.email,
        });

        if (userData) return true;

        const newUser = {
          userName: user.name,
          email: user.email,

          phoneConfirm: {
            confirmed: null,
          },
          avatarURL: user.image,
          confidentLvl: 0,
          bonuses: 0,
          level: 0,
          experience: 0,
          role: 'BUYER',
          achievements: [],
          ratingsStats: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
          },
          subscribed: false,
          banned: false,
          stripeId: null,
          paypalInfo: {
            confirmed: null,
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        const result = await usersCollection.insertOne(newUser);

        if (result.insertedId) return true;

        return false;
      } catch {
        return false;
      }
    },
    async jwt({ token, user }) {
      if (!user) return token;

      const client = new MongoClient(process.env.MONGO_URI!);
      const usersCollection = client.db().collection('users');

      const userData = await usersCollection.findOne({
        email: user.email,
      });
      if (!userData) return token;

      const newToken = tokenService.generateToken(
        userData._id.toString(),
        userData.userName
      );

      cookies().set('token', newToken, {
        expires: Date.now() + 12 * 60 * 60 * 1000, // 12 hours
      });

      token.accesToken = newToken;

      return {
        email: userData.email,
      };
    },
  },
};
