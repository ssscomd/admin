let menus = [
    {
        id: 1,
        level: 1,
        name: '评价活动管理',
        type: "button",
        isExpanded: false,
        isSelected: false,
        subMenu: [
            {
                id: 8,
                level: 2,
                name: '评价活动',
                type: "link",
                url: "/detail/evaluateActive"
            },
            {
                id: 9,
                level: 2,
                name: '活动对比',
                type: "link",
                url: "/detail/activeContrast"
            },
        ]
    }, 
    {
        id: 2,
        level: 1,
        name: '评价对象管理',
        type: "link",
        url: "/detail/object"
    },
    {
        id: 3,
        level: 1,
        name: '评价问卷管理',
        type: "link",
        url: "/detail/questionnaire"
    },
    {
        id: 4,
        level: 1,
        name: '评价题库管理',
        type: "button",
        isExpanded: false,
        isSelected: false,
        subMenu: [
            {
                id: 10,
                level: 2,
                name: '一级属性管理',
                type: "link",
                url: "/detail/firstImportance"
            }, {
                id: 11,
                level: 2,
                name: '二级属性管理',
                type: "link",
                url: "/detail/secondImportance"
            }, {
                id: 12,
                level: 2,
                name: '三级属性管理',
                type: "link",
                url: "/detail/thirdImportance"
            }, {
                id: 13,
                level: 2,
                name: '四级属性管理',
                type: "link",
                url: "/detail/fouthImportance"
            }, {
                id: 14,
                level: 2,
                name: '重要度管理',
                type: "link",
                url: "/detail/importance"
            }
        ]
    }, 
    {
        id: 5,
        level: 1,
        name: '评价类型管理',
        type: "link",
        url: "/detail/evaluationType"
    },
    {
        id: 6,
        level: 1,
        name: '评价人员管理',
        type: "link",
        url: "/detail/evaluator"
    },
    {
        id: 7,
        level: 1,
        name: '权限管理',
        type: "button",
        isExpanded: false,
        isSelected: false,
        subMenu: [
            {
                id: 15,
                level: 2,
                name: '管理员设置',
                type: "link",
                url: "/detail/administrators"
            }, 
            {
                id: 16,
                level: 2,
                name: '人员管理',
                type: "link",
                url: "/detail/role"
            }, 
            
            
    //         {
    //             id: 33,
    //             level: 2,
    //             name: '角色管理',
    //             type: "button",
    //             isExpanded: false,
    //             isSelected: false,
    //             subMenu: [
    //                 {
    //                     name: '用户输入',
    //                     type: "link",
    //                     url: "/detail/user-input"
    //                 }, {
    //                     name: '模板驱动表单',
    //                     type: "link",
    //                     url: "/detail/forms"
    //                 }, {
    //                     name: '表单验证',
    //                     type: "link",
    //                     url: "/detail/form-validation"
    //                 }, {
    //                     name: '响应式表单',
    //                     type: "link",
    //                     url: "/detail/reactive-forms"
    //                 }, {
    //                     name: '动态表单',
    //                     type: "link",
    //                     url: "/detail/dynamic-form"
    //                 }
    //             ]
    //         }, {
    //             id: 34,
    //             level: 2,
    //             name: '引用启动',
    //             type: "link",
    //             url: "/detail/bootstrapping"
    //         }, {
    //             id: 35,
    //             level: 2,
    //             name: 'NgModules',
    //             type: "button",
    //             isExpanded: false,
    //             isSelected: false,
    //             subMenu: [
    //                 {
    //                     id: 341,
    //                     level: 3,
    //                     name: 'NgModule',
    //                     type: "link",
    //                     url: "/detail/ngmodule"
    //                 }, {
    //                     id: 342,
    //                     level: 3,
    //                     name: 'NgModule 常见问题',
    //                     type: "link",
    //                     url: "/detail/ngmodule-faq"
    //                 }
    //             ]
    //         }, {
    //             id: 36,
    //             level: 2,
    //             name: '依赖注入',
    //             type: "button",
    //             isExpanded: false,
    //             isSelected: false,
    //             subMenu: [
    //                 {
    //                     id: 361,
    //                     level: 3,
    //                     name: '依赖注入',
    //                     type: "link",
    //                     url: "/detail/dependency-injection"
    //                 }, {
    //                     id: 362,
    //                     level: 3,
    //                     name: '多级注入器',
    //                     type: "link",
    //                     url: "/detail/hierarchical-dependency-injection"
    //                 }, {
    //                     id: 363,
    //                     level: 3,
    //                     name: 'DI 实例技巧',
    //                     type: "link",
    //                     url: "/detail/dependency-injection-in-action"
    //                 }
    //             ]
    //         }, {
    //             id: 37,
    //             level: 2,
    //             name: 'HttpClient',
    //             type: "link",
    //             url: "/detail/http"
    //         }, {
    //             id: 38,
    //             level: 2,
    //             name: '路由与导航',
    //             type: "link",
    //             url: "/detail/router"
    //         }, {
    //             id: 39,
    //             level: 2,
    //             name: '测试',
    //             type: "link",
    //             url: "/detail/testing"
    //         }, {
    //             id: 310,
    //             level: 2,
    //             name: '速查表',
    //             type: "link",
    //             url: "/detail/cheatsheet"
    //         }
    //     ]
    // }, {
    //     id: 4,
    //     level: 1,
    //     name: '其它技术',
    //     type: "button",
    //     isExpanded: false,
    //     isSelected: false,
    //     subMenu: [
    //         {
    //             id: 41,
    //             level: 2,
    //             name: '国际化（i18n）',
    //             type: "link",
    //             url: "/detail/i18n"
    //         }, {
    //             id: 42,
    //             level: 2,
    //             name: '语言服务',
    //             type: "link",
    //             url: "/detail/language-service"
    //         }, {
    //             id: 43,
    //             level: 2,
    //             name: '安全',
    //             type: "link",
    //             url: "/detail/security"
    //         }, {
    //             id: 44,
    //             level: 2,
    //             name: '环境设置与部署',
    //             type: "button",
    //             isExpanded: false,
    //             isSelected: false,
    //             subMenu: [
    //                 {
    //                     id: 441,
    //                     level: 3,
    //                     name: '搭建本地开发环境',
    //                     type: "link",
    //                     url: "/detail/setup"
    //                 }, {
    //                     id: 442,
    //                     level: 3,
    //                     name: '搭建方式剖析',
    //                     type: "link",
    //                     url: "/detail/setup-systemjs-anatomy"
    //                 }, {
    //                     id: 443,
    //                     level: 3,
    //                     name: '浏览器支持',
    //                     type: "link",
    //                     url: "/detail/browser-support"
    //                 }, {
    //                     id: 444,
    //                     level: 3,
    //                     name: 'npm 包',
    //                     type: "link",
    //                     url: "/detail/npm-packages"
    //                 }, {
    //                     id: 445,
    //                     level: 3,
    //                     name: 'TypeScript 配置',
    //                     type: "link",
    //                     url: "/detail/typescript-configuration"
    //                 }, {
    //                     id: 446,
    //                     level: 3,
    //                     name: '预 (AoT) 编译器',
    //                     type: "link",
    //                     url: "/detail/aot-compiler"
    //                 }, {
    //                     id: 447,
    //                     level: 3,
    //                     name: '预 (AoT) 编译器',
    //                     type: "link",
    //                     url: "/detail/metadata"
    //                 }, {
    //                     id: 448,
    //                     level: 3,
    //                     name: '部署',
    //                     type: "link",
    //                     url: "/detail/deployment"
    //                 }
    //             ]
    //         }, {
    //             id: 45,
    //             level: 2,
    //             name: '升级',
    //             type: "button",
    //             isExpanded: false,
    //             isSelected: false,
    //             subMenu: [
    //                 {
    //                     id: 451,
    //                     level: 3,
    //                     name: '从 AngularJS 升级',
    //                     type: "link",
    //                     url: "/detail/upgrade"
    //                 }, {
    //                     id: 452,
    //                     level: 3,
    //                     name: '升级速查表',
    //                     type: "link",
    //                     url: "/detail/ajs-quick-reference"
    //                 }
    //             ]
    //         }, {
    //             id: 46,
    //             level: 2,
    //             name: 'Visual Studio 2015 快速上手',
    //             type: "link",
    //             url: "/detail/visual-studio-2015"
    //         }, {
    //             id: 47,
    //             level: 2,
    //             name: '风格指南',
    //             type: "link",
    //             url: "/detail/styleguide"
    //         }, {
    //             id: 48,
    //             level: 2,
    //             name: '词汇表',
    //             type: "link",
    //             url: "/detail/glossary"
    //         }
        ]
    }, 
];
let levelNum = 1;
let startExpand = []; // 保存刷新后当前要展开的菜单项
function setExpand(source, url) {
    let sourceItem = '';
    for (let i = 0; i < source.length; i++) {
        sourceItem = JSON.stringify(source[i]); // 把菜单项转为字符串
        if (sourceItem.indexOf(url) > -1) { // 查找当前 URL 所对应的子菜单属于哪一个祖先菜单
            if (source[i].type === 'button') { // 导航菜单为按钮
                source[i].isSelected = true; // 设置选中高亮
                source[i].isExpanded = true; // 设置为展开
                startExpand.push(source[i]);
                // 递归下一级菜单，以此类推
                setExpand(source[i].subMenu, url);
            }
            break;
        }
    }
}
const state = {
    menus,
    levelNum
};
const mutations = {
    findParents(state, payload) {
        if (payload.menu.type === "button") {
            payload.menu.isExpanded = !payload.menu.isExpanded;
        } else if (payload.menu.type === "link") {
            if (startExpand.length > 0) {
                for (let i = 0; i < startExpand.length; i++) {
                    startExpand[i].isSelected = false;
                }
            }
            startExpand = []; // 清空展开菜单记录项
            setExpand(state.menus, payload.menu.url);
        };
    },
    firstInit(state, payload) {
        setExpand(state.menus, payload.url);
    }
}
export default {state, mutations};