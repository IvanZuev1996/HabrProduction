import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { ArticleBlockType, ArticleType, Article } from '@/entities/Article';
import { Rating } from '@/entities/Rating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import ArticleDetailsPage from './ArticleDetailsPage';

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://i.ytimg.com/vi/GkCBRKWKO_8/maxresdefault.jpg?7857057827',
    views: 1022,
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
    },
    createdAt: '04.11.2022',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
            ]
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта'
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);'
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
            ]
        },
        {
            id: '7',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
            ]
        },
        {
            id: '8',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта'
        },
        {
            id: '9',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.'
            ]
        }
    ]
};

const comments = {
    '1': {
        id: '1',
        text: 'some comment 1',
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
        }
    },
    '2': {
        id: '2',
        text: 'some comment 2',
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
        }
    },
    '3': {
        id: '3',
        text: 'some comment 3',
        user: {
            id: '2',
            username: 'user',
            avatar: 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png'
        }
    }
};

const ratings: Rating[] = [
    {
        feedback: 'feedback',
        id: '1',
        rate: 5
    },
    {
        feedback: 'feedback',
        id: '2',
        rate: 5
    },
    {
        feedback: 'feedback',
        id: '3',
        rate: 5
    }
];

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [withMock],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' }
                ]
            },
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: ratings
            },
            {
                url: `${__API__}/article-ratings?userId=1`,
                method: 'GET',
                status: 200,
                response: ratings
            }
        ]
    }
} as ComponentMeta<typeof ArticleDetailsPage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
    <ArticleDetailsPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [
    StoreDecorator({
        articleDetails: {
            data: { ...article, id: '1' }
        },
        articleDetailsPage: {
            comments: {
                entities: comments,
                ids: ['1', '2', '3']
            }
        },
        user: {
            authData: {
                id: '1'
            }
        }
    })
];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article
        },
        articleDetailsPage: {
            comments: {
                entities: comments,
                ids: ['1', '2', '3']
            }
        },
        user: {
            authData: {
                id: '1'
            }
        }
    }),
    ThemeDecorator(Theme.DARK)
];

export const Loading = Template.bind({});
Loading.args = {};

Loading.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
            isLoading: true
        },
        articleDetailsPage: {
            comments: {
                isLoading: true,
                entities: comments,
                ids: ['1', '2', '3']
            },
            recommendations: {
                entities: {},
                ids: [],
                isLoading: true
            }
        },
        user: {
            authData: {
                id: '1'
            }
        }
    })
];

export const LoadingDark = Template.bind({});
LoadingDark.args = {};

LoadingDark.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
            isLoading: true
        },
        articleDetailsPage: {
            comments: {
                isLoading: true,
                entities: comments,
                ids: ['1', '2', '3']
            },
            recommendations: {
                entities: {},
                ids: [],
                isLoading: true
            }
        },
        user: {
            authData: {
                id: '1'
            }
        }
    }),
    ThemeDecorator(Theme.DARK)
];
