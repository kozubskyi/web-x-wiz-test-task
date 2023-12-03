export interface GetTopBuyer {
  achievements: string[];
  avatarURL: string;
  userName: string;
}

export interface GetTopBuyersData {
  getTopBuyers: GetTopBuyer[];
}
