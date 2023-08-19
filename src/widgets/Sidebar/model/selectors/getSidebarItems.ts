import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about-page.svg';
import MainIcon from '@/shared/assets/icons/home-page.svg';
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg';
import ArticlesIcon from '@/shared/assets/icons/articles-icon.svg';
import { SidebarItemType } from '../types/sidebar';
import { RoutePath } from '@/shared/const/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            text: 'Главная',
            Icon: MainIcon,
            authOnly: false
        },
        {
            path: RoutePath.about,
            text: 'О сайте',
            Icon: AboutIcon,
            authOnly: false
        }
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: RoutePath.profile + userData.id,
                text: 'Профиль',
                Icon: ProfileIcon,
                authOnly: true
            },
            {
                path: RoutePath.articles,
                text: 'Статьи',
                Icon: ArticlesIcon,
                authOnly: true
            }
        );
    }

    return sidebarItemsList;
});
