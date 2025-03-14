export const HeaderMenuData = [
    {
        name: "header-menu",
        title: "SHOP",
        id: 'shop',
        sections: [
            {
                name: 'text-button',
                blocks: [
                    {
                        type: 'text',
                        content: 'Unparalleled skin regeneration at your fingertips'
                    },
                    {
                        type: 'link-button',
                        content: 'SHOP ALL',
                        url: '/'
                    }
                ]
            },
            {
                name: 'product-list',
                products: [
                    {
                        name: 'product-card',
                        title: "DYNAMIC AGE DEFENSE",
                        id: 1,
                        url: '/',
                        mainImage: '/product/product_image.webp',
                        hoverImage: '/product/product_hover_image.webp',
                        addToCartButton: {
                            type: 'single',
                            content: 'ADD TO CART'
                        }
                    },
                    {
                        name: 'product-card',
                        title: "DYNAMIC AGE DEFENSE",
                        id: 2,
                        url: '/',
                        mainImage: '/product/product_image.webp',
                        hoverImage: '/product/product_hover_image.webp',
                        addToCartButton: {
                            type: 'single',
                            content: 'ADD TO CART'
                        }
                    },
                    {
                        name: 'product-card',
                        title: "DYNAMIC AGE DEFENSE",
                        id: 3,
                        url: '/',
                        mainImage: '/product/product_image.webp',
                        hoverImage: '/product/product_hover_image.webp',
                        addToCartButton: {
                            type: 'single',
                            content: 'ADD TO CART'
                        }
                    },
                    {
                        name: 'product-card',
                        title: "DYNAMIC AGE DEFENSE",
                        id: 4,
                        url: '/',
                        mainImage: '/product/product_image.webp',
                        hoverImage: '/product/product_hover_image.webp',
                        addToCartButton: {
                            type: 'single',
                            content: 'ADD TO CART'
                        }
                    },
                    {
                        name: 'product-card',
                        title: "DYNAMIC AGE DEFENSE",
                        id: 5,
                        url: '/',
                        mainImage: '/product/product_image.webp',
                        hoverImage: '/product/product_hover_image.webp',
                        addToCartButton: {
                            type: 'single',
                            content: 'ADD TO CART'
                        }
                    },
                    {
                        name: 'product-card',
                        title: "DYNAMIC AGE DEFENSE",
                        id: 6,
                        url: '/',
                        mainImage: '/product/product_image.webp',
                        hoverImage: '/product/product_hover_image.webp',
                        addToCartButton: {
                            type: 'variants',
                            content: [
                                'iPhones 14 and below',
                                'iPhones 15 and up'
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "header-menu",
        title: "SCIENCE",
        id: 'science',
        sections: [
            {
                name: 'link-list',
                blocks: [
                    {
                        type: 'link',
                        url: '/',
                        content: 'Our biotechnology'
                    },
                    {
                        type: 'link',
                        url: '/',
                        content: 'Safety'
                    },
                    {
                        type: 'link',
                        url: '/',
                        content: 'Scientific team'
                    }
                ]
            }
        ]
    },
    {
        name: "header-menu",
        title: "IN THE LAB",
        id: 'in-the-lab',
        sections: [
            {
                name: 'links-button',
                title: 'Browse by Category',
                blocks: [
                    {
                        type: 'link',
                        url: '/',
                        content: 'ROS & Skin Aging'
                    },
                    {
                        type: 'link',
                        url: '/',
                        content: 'Science & Technology'
                    },
                    {
                        type: 'link',
                        url: '/',
                        content: 'Industry Guidelines & Regulations'
                    }
                ],
                button: {
                    type: 'link-button',
                    content: 'Read all articles',
                    url: '/'
                }
            },
            {
                name: 'blog-list',
                title: 'Highlights',
                sections: [
                    {
                        type: 'blog-card',
                        title: 'WHAT IS PHOTOAGING?',
                        image: '/blog/blog.webp',
                        url: '/',
                        button: {
                            type: 'link-button',
                            content: 'Read More',
                            url: '/'
                        }
                    },
                    {
                        type: 'blog-card',
                        title: 'ROS: HOW OXIDATIVE STRESS CONTRIBUTES TO PHOTOAGING',
                        image: '/blog/blog-2.webp',
                        url: '/',
                        button: {
                            type: 'link-button',
                            content: 'Read More',
                            url: '/'
                        }
                    },
                    {
                        type: 'blog-card',
                        title: 'MELASMA: WHAT TO LOOK FOR AND WHAT TO DO',
                        image: '/blog/blog-3.webp',
                        url: '/',
                        button: {
                            type: 'link-button',
                            content: 'Read More',
                            url: '/'
                        }
                    }
                ]
            }
        ]
    }
]


export const socialIconsData = [
    'facebook', 'instagram'
]

export const logoData = {
    imageUrl: '/logo/logo.webp'
}