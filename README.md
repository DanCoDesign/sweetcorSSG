
<div align='center'><img src='https://github.com/DaneConstantin/sweetcorSSG/assets/145013631/88ed8fed-5479-47d3-a101-7b5fa8547eb5' />
</div>

<h2>About the project</h2>


<p><b>SweetCor</b> is a Full-Stack Blog Application Boilerplate developed using Next.js, Tailwind CSS, CSS Modules, and MongoDB.

 The application is designed with simplicity and ease of use in mind, allowing users to create an account and write simple blog posts. However, only the admin has the authority to approve posts to be visible on the blog. Additionally, the admin can update the featured post of the blog. 

The application has the potential for significant enhancements, including support for rich text, multiple images, and integration with a CMS. 
Currently the blog content text is just for presentation purposes and uses <em>dangerouslySetInnerHTML</em> which is not recommended (can lead to security vulnerabilities such as Cross-Site Scripting (XSS)).
</p>
👉 Live Demo: <a href='https://sweetcor-ssg.vercel.app/'>SweetCor Demo</a>

<h3>Features</h3>
<ul style="font-size: 16px;">
  <li><strong>User Registration</strong>: Allows users to create an account.</li>
  <li><strong>Create Blog Posts</strong>: Users can write and submit blog posts.</li>
  <li><strong>Admin Approval</strong>: Only admin-approved posts are visible to the public.</li>
  <li><strong>Featured Post</strong>: Admin can highlight a featured post on the blog homepage.</li>
</ul>

<h3>API Endpoints</h3>
<p>The Blog Application uses the following API endpoints to manage all actions:</p>

<ul>
  <li><strong>addPost</strong>: Endpoint for adding a new post.</li>
  <li><strong>approvePost</strong>: Endpoint for approving a post.</li>
  <li><strong>auth</strong>: Endpoint for user authentication.</li>
  <li><strong>checkAdmin</strong>: Endpoint for checking if the user is an admin.</li>
  <li><strong>checkUsers</strong>: Endpoint for checking user details.</li>
  <li><strong>editPost</strong>: Endpoint for editing a post.</li>
  <li><strong>getFeaturedPost</strong>: Endpoint for fetching the featured post.</li>
  <li><strong>getPosts</strong>: Endpoint for fetching all posts.</li>
  <li><strong>posts</strong>: Endpoint for handling post-related actions.</li>
  <li><strong>register</strong>: Endpoint for user registration.</li>
  <li><strong>setFeaturedPost</strong>: Endpoint for setting the featured post.</li>
  <li><strong>userExists</strong>: Endpoint for checking if a user exists.</li>
</ul>


<h3>Future Enhancements</h3>
<p style="font-size: 16px;">The Blog Application can be greatly improved by integrating the following features:</p>
<ul style="font-size: 16px;">
  <li><strong>Rich Text Editor</strong>: Replace the simple text editor with a rich text editor to support formatting, links, and multimedia.</li>
  <li><strong>Multiple Images</strong>: Allow users to upload and insert multiple images within a single post.</li>
  <li><strong>CMS Integration</strong>: Integrate with a Content Management System (CMS) like Strapi or Sanity or Contentful for more robust content management.</li>
  <li><strong>Commenting System</strong>: Enable users to comment on posts and interact with authors.</li>
  <li><strong>Social Media Sharing</strong>: Add social media sharing buttons to increase post visibility.</li>
</ul>

<p>Styling is done combining both <b>TailwindCSS</b> and <b>CSS Modules</b>. CSS Modules use local scope to avoid style conflicts across different project parts, allowing component-scoped styling.
</p>


<br>

<h2>Screenshots 📸</h2>
<br>
<h3 align='center'>Home Page 🏡</h3>

<div align='center'>
<img src='https://github.com/DaneConstantin/sweetcorSSG/assets/145013631/6e26b736-e2b1-41a7-a046-8d2186b24a13' />
</div>

<br><br>

<h3 align='center'>Blog Page</h3>

<div align='center'>
<img src='https://github.com/DaneConstantin/sweetcorSSG/assets/145013631/ab4de999-e23a-4bbb-ac11-ce75b526208a' />
</div>

<br><br>

<h3 align='center'>Dashboard Page</h3>

<div align='center'>
<img src='https://github.com/DaneConstantin/sweetcorSSG/assets/145013631/3a1aa56f-5a4c-4bfe-9287-ae8e41b944f3' />

</div>
