import { Routes } from '@angular/router';
import { AboutUsPage } from './about-us-page/about-us-page';
import { ContactUsPage } from './contact-us-page/contact-us-page';
import { App } from './app';

export const routes: Routes = [
    { path: "HomePage", component: App },
    { path:"AboutUsPage", component: AboutUsPage },
    { path:"ContactUsPage", component: ContactUsPage }
];
