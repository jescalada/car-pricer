import { Expose } from 'class-transformer';

/* A class that defines how a user should be shown to the outside world */
export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
