import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blog-1">
        <h1>What is Context Api</h1>
        <p>
          The Context API is a React structure that allows you to exchange
          unique details and aids in prop-drilling resolution from all levels of
          your application. This API addresses one major issue: prop drilling.
          Even if you're not familiar with the term, it's likely that you've
          encountered it while working on a React.js app. Prop drilling is the
          process of passing data from component A to component Z via multiple
          layers of intermediary React components. The component will receive
          props indirectly, and we will be responsible for ensuring that
          everything works properly.
        </p>
      </div>

      <div className="blog-2">
        <h1>What is Simantic Tag? </h1>
        <p>
          HTML semantics refers to the tags that add meaning to an HTML page
          rather than just presenting it. It clarifies HTML by better defining
          the various sections and layout of web pages.HTML semantics refers to
          the tags that add meaning to an HTML page rather than just presenting
          it. It clarifies HTML by better defining the various sections and
          layout of web pages.form, table and article tags are the examples of
          semantic elements that clearly define their content.And Non-semantic
          elements include div and span, which reveal nothing about their
          content.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
