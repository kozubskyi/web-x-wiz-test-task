import { redirect } from 'next/navigation';
import { ROUTES } from 'constants/routes';

export default function Cabinet() {
  return redirect(ROUTES.PRIVATE.PROFILE);
}
