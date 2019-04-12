import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App';
import ActiveContrast from "@/pages/active/activeContrast";
import EvaluateActive from "@/pages/active/evaluateActive";
import Object from "@/pages/object/evaluateObject";
import Questionnaire from "@/pages/question/evaluateQuestionnaire";
import FirstImportance from "@/pages/questionBank/firstImportance";
import SecondImportance from "@/pages/questionBank/secondImportance";
import ThirdImportance from "@/pages/questionBank/thirdImportance";
import FouthImportance from "@/pages/questionBank/fouthImportance";
import Importance from "@/pages/questionBank/importance";
import EvaluationType from "@/pages/evaluationType/evaluationType";
import Evaluator from "@/pages/evaluator/evaluator";
import Administrators from "@/pages/privilegeManagement/administrators";
import Role from "@/pages/privilegeManagement/role";

import Third from '@/components/active/third';
import Newtype from '@/components/evaluationType/utils/newType.vue';
import Compile from '@/components/evaluationType/utils/compile';

Vue.use(Router)

export default new Router({
  linkActiveClass: 'selected',
  routes: [{
    path: '/',
    name: 'App',
    component: App
  },
  // 评价活动
  {
  path: '/detail/evaluateActive',
  name: 'evaluateActive',
  component: EvaluateActive,
  
  },
  {
  path: '/detail/activeContrast',
  name: 'activeContrast',
  component: ActiveContrast,
    children:[
      {
        path:'third',
        component:Third

      }
    ]
  },
  // 评价对象
  {
  path: '/detail/object',
  name: 'object',
  component: Object ,
  },
  // 评价问卷
  {
  path: '/detail/questionnaire',
  name: 'questionnaire',
  component: Questionnaire ,
  },
  // 评价题库
  {
  path: '/detail/firstImportance',
  name: 'firstImportance',
  component: FirstImportance
  },
  {
  path: '/detail/secondImportance',
  name: 'secondImportance',
  component: SecondImportance
  },
  {
  path: '/detail/thirdImportance',
  name: '/detail/thirdImportance',
  component: ThirdImportance
  },
  {
  path: '/detail/fouthImportance',
  name: '/detail/fouthImportance',
  component: FouthImportance
  },
  {
  path: '/detail/importance',
  name: 'importance',
  component: Importance
  },
// 评价类型
  {
  path: '/detail/evaluationType',
  name: 'evaluationType',
  component: EvaluationType,
  children:[
    {
      path:'newType',
      component:Newtype,
    },
    {
      path:'compile',
      component:Compile,
    }
  ]
  },

// 评价人员管理：
  {
  path: '/detail/evaluator',
  name: 'evaluator',
  component: Evaluator
  },
// 权限管理
  {
  path: '/detail/administrators',
  name: 'administrators',
  component: Administrators
  },
  {
  path: '/detail/role',
  name: 'role',
  component: Role
  },
  ]
  })
