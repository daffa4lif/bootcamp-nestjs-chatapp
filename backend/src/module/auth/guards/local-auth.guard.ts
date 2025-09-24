import { AuthGuard } from '@nestjs/passport';

// bisa di rename nama pada local.strategy.ts pada extends
export class LocalAuthGuard extends AuthGuard('local') {}
