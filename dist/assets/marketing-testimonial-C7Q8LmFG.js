import{j as s,a as o,T as n,P as t,B as l,h as c}from"./index-CZJcyuZU.js";import{A as d,u as p,C as h,a as m,b as u}from"./carousel-arrow-index-D_x1890L.js";import{G as i}from"./marketing-landing-free-seo-BUsx4Va3.js";function x({testimonial:r,...e}){return s.jsxs(o,{spacing:{xs:5,md:10},direction:{xs:"column",md:"row"},...e,children:[s.jsx(n,{sx:{mb:5,lineHeight:1.75,textAlign:"center",fontSize:{md:20}},children:r.review}),s.jsxs(o,{sx:{flexShrink:0,textAlign:"center"},children:[s.jsx(d,{alt:r.name,src:r.avatarUrl,sx:{width:96,height:96,mx:"auto"}}),s.jsx(n,{variant:"h6",sx:{mt:2.5,mb:.5},children:r.name}),s.jsx(n,{variant:"body2",sx:{color:"text.secondary"},children:r.role})]})]})}x.propTypes={testimonial:t.shape({avatarUrl:t.string,name:t.string,review:t.string,role:t.string})};function j({testimonials:r}){const e=p({autoplay:!0,autoplaySpeed:5e3,slidesToShow:1,slidesToScroll:1,...h({sx:{mt:{xs:8,md:10}}})});return s.jsx(l,{sx:{bgcolor:"background.neutral",overflow:"hidden"},children:s.jsxs(c,{sx:{position:"relative",py:{xs:10,md:15}},children:[s.jsxs(o,{spacing:2,sx:{textAlign:"center",mb:{xs:8,md:10}},children:[s.jsx(n,{variant:"overline",sx:{color:"text.disabled"},children:"Testimonials"}),s.jsx(n,{variant:"h2",children:"Who Love Our Work"})]}),s.jsx(m,{onNext:e.onNext,onPrev:e.onPrev,leftButtonProps:{sx:{opacity:{xs:0,md:1}}},rightButtonProps:{sx:{opacity:{xs:0,md:1}}},children:s.jsx(i,{container:!0,spacing:10,justifyContent:"center",children:s.jsx(i,{xs:12,md:8,children:s.jsx(u,{ref:e.carouselRef,...e.carouselSettings,children:r.map(a=>s.jsx(x,{testimonial:a},a.id))})})})})]})})}j.propTypes={testimonials:t.array};export{j as M};