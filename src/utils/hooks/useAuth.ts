import { useRouter } from 'next/navigation';
import { ROUTES } from 'constants/routes';
import { tokenService } from 'utils/services/token-service';

export const useAuth = () => {
  const router = useRouter();

  const logout = () => {
    tokenService.clearToken();
    router.refresh();
    router.push(ROUTES.AUTH.LOGIN);
  };

  return { logout };
};
