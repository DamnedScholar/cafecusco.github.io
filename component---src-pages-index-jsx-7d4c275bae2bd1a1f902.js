webpackJsonp([0xc23565d713b7],{208:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),c=n(221),f=r(c),p=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},t.prototype.render=function(){var e=this.getPostList();return u.default.createElement("div",null,e.map(function(e){return u.default.createElement(f.default,{to:e.path,key:e.title},u.default.createElement("h1",null,e.title))}))},t}(u.default.Component);t.default=p,e.exports=t.default},408:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),c=n(69),f=r(c),p=n(55),s=r(p),d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,r=e.postSEO,o=void 0,a=void 0,i=void 0,l=void 0;if(r){var c=t.frontmatter;o=c.title,a=c.description?c.description:t.excerpt,i=c.cover,l=s.default.siteUrl+s.default.pathPrefix+n}else o=s.default.siteTitle,a=s.default.siteDescription,i=s.default.siteLogo;var p="/"===s.default.pathPrefix?"":s.default.pathPrefix;i=s.default.siteUrl+p+i;var d=s.default.siteUrl+s.default.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:o,alternateName:s.default.siteTitleAlt?s.default.siteTitleAlt:""}];return r&&m.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":l,name:o,image:i}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:o,alternateName:s.default.siteTitleAlt?s.default.siteTitleAlt:"",headline:o,image:{"@type":"ImageObject",url:i},description:a}]),u.default.createElement(f.default,null,u.default.createElement("meta",{name:"description",content:a}),u.default.createElement("meta",{name:"image",content:i}),u.default.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),u.default.createElement("meta",{property:"og:url",content:r?l:d}),r?u.default.createElement("meta",{property:"og:type",content:"article"}):null,u.default.createElement("meta",{property:"og:title",content:o}),u.default.createElement("meta",{property:"og:description",content:a}),u.default.createElement("meta",{property:"og:image",content:i}),u.default.createElement("meta",{property:"fb:app_id",content:s.default.siteFBAppID?s.default.siteFBAppID:""}),u.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u.default.createElement("meta",{name:"twitter:creator",content:s.default.userTwitter?s.default.userTwitter:""}),u.default.createElement("meta",{name:"twitter:title",content:o}),u.default.createElement("meta",{name:"twitter:description",content:a}),u.default.createElement("meta",{name:"twitter:image",content:i}))},t}(l.Component);t.default=d,e.exports=t.default},810:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(1),u=r(l),c=n(69),f=r(c),p=n(208),s=(r(p),n(408)),d=r(s),m=n(55),y=r(m),h=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return u.default.createElement("article",{className:"index"},u.default.createElement(f.default,{title:y.default.siteTitle}),u.default.createElement(d.default,{postEdges:e}),"Welcome to the front page!")},t}(u.default.Component);t.default=h;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-7d4c275bae2bd1a1f902.js.map