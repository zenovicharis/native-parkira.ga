import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { HomeComponent } from "./pages/home/home.component";


export const routes = [
    { path:"", component: LoginComponent},
    { path:'register', component:RegisterComponent },
    { path:'home', component:HomeComponent}

];

export const navigatableComponents = [
    LoginComponent,
    RegisterComponent,
    HomeComponent
];