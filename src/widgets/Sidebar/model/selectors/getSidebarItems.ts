import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about-page.svg';
import ArticlesIcon from '@/shared/assets/icons/articles-icon.svg';
import MainIcon from '@/shared/assets/icons/home-page.svg';
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg';
import { routes } from '@/shared/const/router';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: routes.main(),
            text: 'Главная',
            Icon: MainIcon,
            authOnly: false
        },
        {
            path: routes.about(),
            text: 'О сайте',
            Icon: AboutIcon,
            authOnly: false
        }
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: routes.profile(userData.id),
                text: 'Профиль',
                Icon: ProfileIcon,
                authOnly: true
            },
            {
                path: routes.articles(),
                text: 'Статьи',
                Icon: ArticlesIcon,
                authOnly: true
            }
        );
    }

    return sidebarItemsList;
});
