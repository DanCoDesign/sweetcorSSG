
<div align='center'><img src='https://github.com/DaneConstantin/sweetcorSSG/assets/145013631/88ed8fed-5479-47d3-a101-7b5fa8547eb5' />
</div>

<h2>About the project</h2>


<p><b>SweetCor</b> is a Full-Stack Blog Application Boilerplate developed using Next.js, Tailwind CSS, CSS Modules, and MongoDB.

 The application is designed with simplicity and ease of use in mind, allowing users to create an account and write simple blog posts. However, only the admin has the authority to approve posts to be visible on the blog. Additionally, the admin can update the featured post of the blog. 

The application has the potential for significant enhancements, including support for rich text, multiple images, and integration with a CMS. 
Currently the blog content text is just for presentation purposes and uses <em>dangerouslySetInnerHTML</em> which is not recommended (can lead to security vulnerabilities such as Cross-Site Scripting (XSS)).
</p>

👉 Live Demo: <a href='https://sweetcor-ssg.vercel.app/'>SweetCor Demo</a>

<h2>Features</h2>

<ul style="font-size: 16px;">
  <li><strong>User Registration</strong>: Allows users to create an account.</li>
  <li><strong>Create Blog Posts</strong>: Users can write and submit blog posts.</li>
  <li><strong>Admin Approval</strong>: Only admin-approved posts are visible to the public.</li>
  <li><strong>Featured Post</strong>: Admin can highlight a featured post on the blog homepage.</li>
</ul>

<h2>API Endpoints</h2>

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


<h2>Future Enhancements</h2>
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

<h2>Get it Now</h2>

<p>
This Next.js Template is free for now. It is extremely fast, provides an excellent starting point for any blog and it's easily extendable. Future enhancements and personalization can further improve its functionality and user experience.
</p>

<br>

<h2>Need Help? Hire me</h2>

<p style="font-size: 16px;">If you are not a developer or need a helping hand, you can hire me and I will install, setup, customize and publish this template for you.</p>
