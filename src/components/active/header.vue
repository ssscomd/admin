<template>
    <div>
        <div id='content'>
            <div v-on:click='jump'>
                <img src="./img/u299.png" alt="1">
                    <img src="./img/u299.png" alt="2">
                        <img src="./img/u299.png" alt="3"></div>
                        <div></div>
                        <div id='inputL'></div>

                    </div>
                    <div id='Fenye'>
                        <Page :total="100"/>
                    </div>
                </div>

            </template>

            <script>
                import Vue from 'vue'
                import {Page} from 'iview';
                Vue.component('Page', Page);
                export default {
                    methods: {
                        jump() {
                            console.log(this)
                            this
                                .$router
                                .push('/detail/activeContrast/third')
                        }
                    }
                }
            </script>

            <style lang='less' scoped="scoped">

                #content {
                    background: #dfdfdf;
                    div {
                        margin-top: 20px;
                        height: 150px;
                        //    background:gray;
                        line-height: 150px;
                        border-bottom: 1px solid black;
                        img {
                            padding-top: 20px;
                            display: inline-block;
                            margin-left: 90px;
                        }
                    }
                    #inputL {
                        border-bottom: none;
                    }

                }
                #Fenye {
                    position: absolute;
                    bottom: 10px;
                    right: 100px;
                }
            </style>