# Content Management Guide

This guide explains how to add and update content on your portfolio website.

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── about/page.tsx          # Edit your bio, skills, experience
│   │   ├── projects/page.tsx       # Edit project listings
│   │   ├── projects/[slug]/page.tsx # Edit project detail template
│   │   ├── research/page.tsx       # Edit research interests
│   │   ├── blog/page.tsx           # Edit blog listings
│   │   └── contact/page.tsx        # Edit contact info
│   └── components/
│       ├── Navigation.tsx          # Edit navigation links
│       └── Footer.tsx              # Edit footer content
├── content/
│   ├── projects/                   # Add project MDX files here (future)
│   └── blog/                       # Add blog MDX files here (future)
└── public/
    └── resume.pdf                  # Add your resume here

```

---

## 1. Adding Projects

### Current Setup (Simple)
Projects are currently defined in `src/app/projects/page.tsx`. To add a new project:

**File:** `src/app/projects/page.tsx`

Find the `sampleProjects` array and add your project:

```typescript
const sampleProjects = [
  {
    slug: 'your-project-slug',           // URL-friendly name (lowercase, hyphens)
    title: 'Your Project Title',
    description: 'Brief description of your project (1-2 sentences)',
    tags: ['React', 'Python', 'AWS'],    // Technology tags
    featured: true,                      // true = shows "Featured" badge
    date: 'Month Year',                  // e.g., 'February 2026'
    githubUrl: 'https://github.com/...',  // Optional GitHub link
    liveUrl: 'https://...',              // Optional live demo link
  },
  // Add more projects here...
];
```

### Adding Project Details
To add full details for a project, edit `src/app/projects/[slug]/page.tsx`:

Find the `getProjectBySlug` function and add your project data:

```typescript
const getProjectBySlug = (slug: string) => {
  const projects: Record<string, any> = {
    'your-project-slug': {
      title: 'Your Project Title',
      description: 'One-line description',
      longDescription: `Full project description here.
      
      Can be multiple paragraphs.
      
      Explain what the project does, why you built it, etc.`,
      tags: ['React', 'TypeScript', 'Node.js'],
      date: 'February 2026',
      githubUrl: 'https://github.com/spencerlarsen/your-project',
      liveUrl: 'https://your-project.com',  // Optional
      features: [
        'Feature 1: What it does',
        'Feature 2: Another feature',
        'Feature 3: Cool capability',
      ],
      technologies: [
        { name: 'React', description: 'Frontend framework' },
        { name: 'Node.js', description: 'Backend runtime' },
      ],
    },
    // Add more projects...
  };
  return projects[slug];
};
```

---

## 2. Updating Your About Page

**File:** `src/app/about/page.tsx`

### Edit Your Bio
Find the "Background" section and replace the placeholder text:

```typescript
<p>
  I'm Spencer Larsen, [your actual background and experience here]
</p>
<p>
  [Add more paragraphs about your work, interests, goals]
</p>
```

### Update Skills
Find the `skills` object and customize:

```typescript
const skills = {
  'Programming Languages': ['Python', 'JavaScript', 'Your', 'Languages'],
  'Web Technologies': ['Add', 'Your', 'Web', 'Skills'],
  'Data & ML': ['Your', 'Data', 'Science', 'Tools'],
  'Tools & Platforms': ['Git', 'Docker', 'Your', 'Tools'],
};
```

### Add Education & Experience
Replace the placeholder section with your actual content:

```typescript
<div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Education & Experience</h2>
  <div className="space-y-8">
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900">Your Degree</h3>
      <p className="text-gray-600">University Name • 2020-2024</p>
      <p className="text-gray-700 mt-2">Details about your education...</p>
    </div>
    {/* Add more education/experience entries */}
  </div>
</div>
```

---

## 3. Adding Research & Publications

**File:** `src/app/research/page.tsx`

### Update Research Interests
Find the `researchAreas` array:

```typescript
const researchAreas = [
  {
    title: 'Your Research Area',
    description: 'What you research and why it matters',
    topics: ['Topic 1', 'Topic 2', 'Topic 3'],
  },
  // Add more research areas...
];
```

### Add Publications
Find the `samplePublications` array:

```typescript
const samplePublications = [
  {
    title: 'Your Paper Title',
    authors: 'Spencer Larsen, Co-Author Name, et al.',
    venue: 'Conference or Journal Name',
    year: '2025',
    type: 'Conference Paper',  // or 'Journal Article', 'Workshop', etc.
    abstract: 'Brief description of your research paper...',
    links: {
      pdf: 'https://link-to-paper.pdf',
      doi: 'https://doi.org/your-paper',
    },
  },
  // Add more publications...
];
```

---

## 4. Adding Blog Posts

**File:** `src/app/blog/page.tsx`

Find the `samplePosts` array:

```typescript
const samplePosts = [
  {
    slug: 'your-post-slug',
    title: 'Your Blog Post Title',
    excerpt: 'Brief summary of the post (2-3 sentences)',
    date: 'February 11, 2026',
    readTime: '5 min read',
    tags: ['Tag1', 'Tag2', 'Tag3'],
  },
  // Add more posts...
];
```

**Note:** Full blog post pages with MDX will be set up in Phase 3. For now, this creates the listing.

---

## 5. Updating Contact Information

**File:** `src/app/contact/page.tsx`

Your social links are already integrated! To update:

1. Find the social media links section
2. Update URLs if needed (already populated from resources.txt)
3. Update the "Professional" description text

---

## 6. Adding Your Resume

1. Export your resume as a PDF file
2. Name it `resume.pdf`
3. Place it in the `public/` folder
4. The download button on the About page will automatically link to it

---

## 7. Updating Navigation/Footer

### Navigation Links
**File:** `src/components/Navigation.tsx`

Find the `navLinks` array to add/remove pages:

```typescript
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  // Add or remove links...
];
```

### Footer
**File:** `src/components/Footer.tsx`

Edit the footer text, links, or social media icons in this file.

---

## 8. Adding Project Images

### Current: Using placeholders
Projects currently show placeholder gradient backgrounds.

### To add real images:

1. **Add images to `public/projects/`**:
   ```
   public/
   └── projects/
       ├── portfolio-website.png
       ├── ml-pipeline.png
       └── your-project.png
   ```

2. **Update ProjectCard component** (`src/components/ProjectCard.tsx`):
   ```typescript
   // Replace the placeholder div with:
   <Image
     src={`/projects/${slug}.png`}
     alt={title}
     width={400}
     height={250}
     className="w-full h-48 object-cover"
   />
   ```

---

## Quick Start Checklist

- [ ] Update your bio in `src/app/about/page.tsx`
- [ ] Add your skills in `src/app/about/page.tsx`
- [ ] Add your education & experience in `src/app/about/page.tsx`
- [ ] Add projects in `src/app/projects/page.tsx`
- [ ] Add project details in `src/app/projects/[slug]/page.tsx`
- [ ] Add research interests in `src/app/research/page.tsx`
- [ ] Add publications in `src/app/research/page.tsx`
- [ ] Add resume PDF to `public/resume.pdf`
- [ ] Add project images to `public/projects/`
- [ ] Test all pages in browser

---

## Testing Your Changes

1. Start the development server:
   ```bash
   cd portfolio-website
   npm run dev
   ```

2. Open http://localhost:3000 in your browser

3. Navigate to each page and verify your content looks correct

4. Commit your changes:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```

---

## Need Help?

- **Broken link?** Check that your `slug` matches between the projects list and detail pages
- **Image not showing?** Verify the file is in `public/` and the path is correct
- **Text formatting?** Add more `<p>` tags or use line breaks
- **Want more customization?** The files are well-commented - look for similar examples and copy the pattern

---

## Coming Soon (Phase 3+)

- MDX support for blog posts (write in Markdown!)
- Syntax highlighting for code blocks
- Automatic reading time calculation
- SEO improvements with structured data
- Dark mode toggle
