import { CounterSchema } from 'entities/Counter';
import { SidebarSchema } from 'entities/Sidebar/model/types/sidebar';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm: LoginSchema;
    sidebar: SidebarSchema;
}
