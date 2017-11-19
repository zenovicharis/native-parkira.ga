import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

export const routes = [
    { path:"", component: LoginComponent},
    { path:'register', component:RegisterComponent }
];

export const navigatableComponents = [
    LoginComponent,
    RegisterComponent
];