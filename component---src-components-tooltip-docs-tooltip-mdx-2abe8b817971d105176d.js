(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{jI8I:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return s})),o.d(t,"default",(function(){return u}));o("5hJT"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("PJhk");var n=o("/FXl"),a=o("TjRS"),i=o("ZFoC"),r=o("XH+Y"),l=o("oxid"),p=o("/5r1");o("aD51");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/Tooltip/docs/Tooltip.mdx"}});var b={_frontmatter:s},d=a.a;function u(e){var t,o=e.components,u=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,["components"]);return Object(n.b)(d,c({},b,u,{components:o,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"tooltip"},"Tooltip"),Object(n.b)("p",null,"This component provides informative text to an UI element."),Object(n.b)(p.a,{mdxType:"SimpleTooltipExample"}),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-jsx"}),'<Tooltip content="This is a regular tooltip 🏓">\n    <div>target</div>\n</Tooltip>\n')),Object(n.b)("h3",{id:"usage"},"Usage"),Object(n.b)("p",null,"Use the tooltip for user on-boarding, guiding information about a new feature, detailed interactive workflows or for a contextual help (eg. over a button)."),Object(n.b)("h3",{id:"appearance"},"Appearance"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The font size is 12px and font weight is regular."),Object(n.b)("li",{parentName:"ul"},"Top and bottom padding around the text area is 4px and 8px for right and left."),Object(n.b)("li",{parentName:"ul"},"The max-width for the tooltip is 300px in desktop and 160px on mobile devices."),Object(n.b)("li",{parentName:"ul"},"The copy should be instructional and concise. Max 200 characters are allowed."),Object(n.b)("li",{parentName:"ul"},"Emojis are allowed to be used 😇")),Object(n.b)("h3",{id:"behavior"},"Behavior"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The tooltip is accessible on hover or on tap (mobile) and should be automatically dismissed when the user stops hovering\nthe target area (or taps somewhere else on mobile devices)"),Object(n.b)("li",{parentName:"ul"},"The tooltip should be eased-out."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Don’ts:")," don't change the shape of the tooltip (rounded corners, etc), don’t crop it, don’t hide the element it hovers over")),Object(n.b)("h3",{id:"placement"},"Placement"),Object(n.b)("p",null,"It is possible to adjust the position of the tooltip connection to the target with the ",Object(n.b)("inlineCode",{parentName:"p"},"placement")," prop. Below is a list\nof possible options which are represented in the square next to it. It is important to keep in mind that the tooltip\nwill be moved to a different position if it cannot be shown on the desired side due to screen sizes. Read more about the\nTether library ",Object(n.b)("a",c({parentName:"p"},{href:"http://tether.io"}),"here"),"."),Object(n.b)(l.a,{mdxType:"TooltipPlacementExample"}),Object(n.b)("h3",{id:"playground"},"Playground"),Object(n.b)(i.b,{__position:2,__code:'<Tooltip content="Tooltip Content!">\n  <span>Target</span>\n</Tooltip>',__scope:(t={props:u,DefaultLayout:a.a,Playground:i.b,Tooltip:r.a,TooltipPlacementExample:l.a,SimpleTooltipExample:p.a},t.DefaultLayout=a.a,t._frontmatter=s,t),mdxType:"Playground"},Object(n.b)(r.a,{content:"Tooltip Content!",mdxType:"Tooltip"},Object(n.b)("span",null,"Target"))),Object(n.b)("h3",{id:"technical-usage"},"Technical Usage"),Object(n.b)("p",null,"For the Tooltip to work properly, it needs to have a single child component to bind the mouse-enter and -leave events to.\nThe library ",Object(n.b)("inlineCode",{parentName:"p"},"react-tether")," which is used internally works with setting a ",Object(n.b)("inlineCode",{parentName:"p"},"ref")," to the child. To avoid complications, make\nsure the child component supports the ",Object(n.b)("inlineCode",{parentName:"p"},"ref")," property."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-jsx"}),'const CustomComponent = React.forwardRef((props, ref) => (\n    <div {...props}>\n        <button ref={ref}>Hover to show tooltip</button>\n    </div>\n));\n\nconst WithTooltip = () => (\n    <Tooltip content="Information about your feature">\n        <CustomComponent />\n    </Tooltip>\n)\n')))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/Tooltip/docs/Tooltip.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-tooltip-docs-tooltip-mdx-2abe8b817971d105176d.js.map