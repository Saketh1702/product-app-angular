import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { 
        path: 'products', 
        loadChildren: () => import('./products/products.routes').then(m => m.PRODUCTS_ROUTES) 
    },
    { path: '**', redirectTo: '/products' }
];
