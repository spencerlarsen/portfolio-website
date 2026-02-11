# How to Add a Blog Post

Creating a new blog post is simple! Just create a `.mdx` file in the `content/blog/` directory.

## Step 1: Create the File

Create a new file in `content/blog/` with a URL-friendly name:

```
content/blog/my-awesome-post.mdx
```

The filename becomes the URL slug: `/blog/my-awesome-post`

## Step 2: Add Frontmatter

Start your file with frontmatter (metadata between `---`):

```mdx
---
title: "Your Blog Post Title"
date: "2026-02-11"
excerpt: "A brief description that appears in the blog listing (1-2 sentences)"
tags: ["Next.js", "TypeScript", "Tutorial"]
author: "Spencer Larsen"
---
```

## Step 3: Write Your Content

After the frontmatter, write your content in Markdown:

```mdx
# Main Heading

Your introduction paragraph here.

## Subheading

More content with **bold** and *italic* text.

### Code Examples

Use triple backticks for code blocks with syntax highlighting:

\`\`\`javascript
function hello() {
  console.log("Hello, world!");
}
\`\`\`

\`\`\`python
def greet(name):
    print(f"Hello, {name}!")
\`\`\`

### Lists

- Bullet point 1
- Bullet point 2
- Bullet point 3

1. Numbered item 1
2. Numbered item 2
3. Numbered item 3

### Links

[Link text](https://example.com)

### Images

![Alt text](/images/my-image.png)

### Quotes

> This is a blockquote
> It can span multiple lines

### Inline Code

Use backticks for `inline code` within text.
```

## Full Example

Here's a complete example:

```mdx
---
title: "Building a REST API with Node.js"
date: "2026-02-11"
excerpt: "Learn how to build a RESTful API using Node.js, Express, and MongoDB. Complete with authentication and best practices."
tags: ["Node.js", "API", "Backend", "Tutorial"]
author: "Spencer Larsen"
---

# Building a REST API with Node.js

In this tutorial, we'll build a complete REST API from scratch.

## What You'll Learn

- Setting up Express
- Connecting to MongoDB
- Creating CRUD endpoints
- Adding authentication
- Error handling

## Prerequisites

Before starting, make sure you have:

- Node.js installed (v18+)
- Basic JavaScript knowledge
- MongoDB installed locally or access to MongoDB Atlas

## Step 1: Project Setup

First, create a new project:

\`\`\`bash
mkdir my-api
cd my-api
npm init -y
\`\`\`

Install dependencies:

\`\`\`bash
npm install express mongoose dotenv
npm install -D nodemon typescript @types/express
\`\`\`

## Step 2: Create Server

Create `server.js`:

\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello, API!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## Step 3: Define Routes

... rest of your tutorial content ...

## Conclusion

You've now built a complete REST API! Here are some next steps:

- Add more endpoints
- Implement pagination
- Add rate limiting
- Deploy to production

## Resources

- [Express Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)

---

*Have questions? Feel free to [reach out](/contact)!*
```

## Supported Markdown Features

- ✅ Headings (h1-h6)
- ✅ Bold, italic, strikethrough
- ✅ Links and images
- ✅ Ordered and unordered lists
- ✅ Code blocks with syntax highlighting
- ✅ Inline code
- ✅ Blockquotes
- ✅ Tables
- ✅ Horizontal rules
- ✅ GitHub Flavored Markdown (GFM)

## Code Syntax Highlighting

Supported languages include:

- JavaScript/TypeScript
- Python
- Java
- C/C++
- Go
- Rust
- HTML/CSS
- Bash/Shell
- And many more!

Just specify the language after the opening backticks:

\`\`\`python
# This will have Python syntax highlighting
def hello():
    print("Hello!")
\`\`\`

## Tips

1. **Keep slugs simple**: Use lowercase and hyphens (e.g., `my-blog-post.mdx`)
2. **Write good excerpts**: They appear in the blog listing
3. **Use relevant tags**: Helps readers find related content
4. **Add images**: Place them in `public/images/blog/`
5. **Test locally**: Run `npm run dev` to preview your post

## What Happens Automatically

When you add a new `.mdx` file, the blog system automatically:

- ✅ Calculates reading time
- ✅ Formats the date
- ✅ Generates the URL from filename
- ✅ Creates a listing card
- ✅ Adds syntax highlighting
- ✅ Creates share buttons
- ✅ Adds proper SEO metadata

## Publishing

After creating your post:

1. Test it locally: `npm run dev`
2. Visit `http://localhost:3000/blog/your-post-slug`
3. Check that everything looks good
4. Commit and push:
   ```bash
   git add .
   git commit -m "Add new blog post: Your Title"
   git push
   ```

Your post will be live after deployment!

## Need Help?

Refer to the sample posts in `content/blog/` for examples:
- `welcome-to-my-portfolio.mdx`
- `getting-started-with-nextjs.mdx`
