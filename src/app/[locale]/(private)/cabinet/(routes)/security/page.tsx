import { Security } from '.';

export default async function SecurityPage() {

  return (
    <Security
      isTwoFactorEnabled={false}
    />
  );
}
