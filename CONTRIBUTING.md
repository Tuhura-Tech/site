# Contributing to Tūhura Tech Website

## Getting Started

### What You'll Need

- Node.js (version 18 or newer)
- pnpm (we use this instead of npm for better dependency management)
- A text editor (VS Code works great with our setup)
- Git for version control

### Setting Up Your Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:

   ```bash
   git clone https://github.com/YOUR-USERNAME/site.git
   cd site
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Open <http://localhost:4321> in your browser

You should see the site running locally. Any changes you make will automatically refresh the page.

### Testing Your Changes

Before submitting changes, run these commands to catch issues:

```bash
pnpm run check        # Checks TypeScript and Astro for errors
pnpm run lint:fix     # Checks code style and potential problems
pnpm run format       # Checks formatting and whitespace
pnpm build           # Makes sure everything builds correctly
```

If any of these fail, you'll need to fix the issues before we can accept your changes.

## How We Organize Code

Our codebase follows Astro's conventions:

- `src/pages/` - Each file becomes a page on the website
- `src/components/` - Reusable pieces like headers, buttons, forms
- `src/layouts/` - Templates that wrap around page content
- `src/assets/` - Images, icons, and other media files
- `public/` - Files served directly (like robots.txt)

### Our Tech Stack

- **Astro 5** - The main framework that builds our static site
- **Tailwind CSS** - For styling (no need to write custom CSS most of the time)
- **TypeScript** - Adds type checking to catch bugs early
- **Leaflet** - Powers the interactive maps
- **Biome** - Handles code formatting and linting

## Code Style Guidelines

We keep things consistent so the codebase is easy to work with:

### General Principles

- Write code that explains itself - clear variable names, logical structure
- Keep functions and components small and focused
- Use TypeScript types to prevent bugs
- Comment complex logic, but prefer self-documenting code
- Test your changes in different browsers and screen sizes

### Astro Components

When writing `.astro` files:

```astro
---
// TypeScript goes here - define props, import dependencies
interface Props {
 title: string;
 showSubtitle?: boolean;
}

const { title, showSubtitle = false } = Astro.props;
---

<!-- HTML template goes here -->
<section class="py-8">
 <h2 class="text-2xl font-bold text-gray-900">{title}</h2>
 {showSubtitle && <p class="mt-2 text-gray-600">Subtitle content</p>}
</section>
```

### Styling Approach

We use Tailwind CSS utilities for most styling:

```html
<!-- Good: Uses utility classes -->
<button class="rounded-lg bg-tuhura-green px-4 py-2 text-white hover:bg-green-600">Click me</button>

<!-- Avoid: Custom CSS unless really necessary -->
<button class="custom-button">Click me</button>
```

Common patterns we use:

- `container-custom` for page-wide containers
- `text-tuhura-green` for our brand green color
- Responsive utilities like `lg:flex-row` for different screen sizes

## Accessibility Standards

This is non-negotiable - we build for everyone:

### Must-haves for every contribution

- **Semantic HTML** - Use proper elements (`<button>`, `<nav>`, `<main>`, etc.)
- **Keyboard navigation** - Everything clickable must work with Tab/Enter
- **Screen reader support** - Add `aria-label` and other ARIA attributes when needed
- **Color contrast** - Text must be readable for people with vision differences
- **Alternative text** - Describe images for people who can't see them

### Testing accessibility

1. Navigate the page using only your keyboard (Tab, Enter, Escape keys)
2. Use your browser's accessibility checker (usually in dev tools)
3. Test with a screen reader if possible
4. Check color contrast with tools like WebAIM's contrast checker

## Making Your First Contribution

### Small Changes (typos, copy updates, minor fixes)

1. Make your changes in a new branch:

   ```bash
   git checkout -b fix/typo-in-about-page
   ```

2. Edit the relevant files
3. Test your changes locally
4. Commit with a clear message:

   ```bash
   git commit -m "Fix typo in about page heading"
   ```

5. Push and create a pull request

### Larger Changes (new features, major updates)

1. Create an issue first to discuss your idea
2. Wait for feedback before starting work
3. Follow the same branching and testing process
4. Include screenshots or videos if your changes affect the visual design

## Pull Request Process

When you submit a pull request:

1. **Fill out the template** - Explain what you changed and why
2. **Link related issues** - Use "Closes #123" to automatically close issues
3. **Test thoroughly** - Include steps for reviewers to test your changes
4. **Keep it focused** - One pull request should address one problem or feature

Our automated checks will run on your PR:

- TypeScript compilation
- Code style and linting
- Build verification

If any checks fail, you'll need to fix them before we can review.

### What We Look For

- **Functionality** - Does it work as expected?
- **Accessibility** - Can everyone use it?
- **Performance** - Does it slow down the site?
- **Code quality** - Is it maintainable and clear?
- **Design consistency** - Does it fit with the rest of the site?

## Types of Contributions We Need

### Content and Copy

- Fixing typos and grammar
- Improving explanations and instructions
- Adding missing information
- Translating content (future plans)

### User Experience

- Making forms easier to use
- Improving navigation
- Better mobile experience
- Faster loading times

### Technical Improvements

- Better accessibility
- Performance optimizations
- Bug fixes
- Code cleanup and organization

### New Features

- Interactive components
- Additional pages or sections
- Integration with new services
- Enhanced search and filtering

## Reporting Bugs

Found something broken? Here's how to report it:

1. **Check existing issues** first to avoid duplicates
2. **Be specific** - Include:
   - What you expected to happen
   - What actually happened
   - Steps to reproduce the problem
   - Your browser and operating system
   - Screenshots or error messages if relevant

3. **Test in different browsers** if possible
4. **Use a clear title** like "Session map doesn't load in Safari on iOS"

## Suggesting New Features

Have an idea? We'd love to hear it:

1. **Open an issue** with the "feature request" label
2. **Describe the problem** you're trying to solve
3. **Explain your proposed solution**
4. **Consider alternatives** - are there simpler approaches?
5. **Think about impact** - who would benefit and how?

## Getting Help

Stuck? Here's where to find help:

- **GitHub Issues** - For bugs and feature requests
- **GitHub Discussions** - For questions and brainstorming
- **Email** - <contact@tuhuratech.org.nz> for urgent matters or private concerns

## Code of Conduct

We're committed to providing a welcoming environment for everyone. Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

Key points:

- Be respectful and inclusive
- Focus on constructive feedback
- Help newcomers feel welcome
- Report inappropriate behavior

## License

By contributing to this project, you agree that your contributions will be licensed under the GNU Affero General Public License v3.0 (AGPLv3). This means:

- Your code will remain free and open source
- Any website using this code must also be open source
- Network users have the right to access the source code

See the [LICENSE](LICENSE) file for the full license text.
