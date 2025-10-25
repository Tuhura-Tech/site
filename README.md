# Tūhura Tech Website

The official website for Tūhura Tech, a New Zealand charity dedicated to improving technology education for rangatahi. Built with modern web technologies for performance, accessibility, and ease of contribution.

## Quick Start

For detailed development setup, code standards, and contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

### Basic Setup

```bash
git clone https://github.com/Tuhura-Tech/site.git
cd site
pnpm install
pnpm dev
```

### Scripts

```bash
pnpm dev        # Development server
pnpm build      # Production build
pnpm check      # TypeScript and Astro diagnostics
pnpm lint       # Code quality checks
```

## Technology Stack

- **Astro 5** - Static site generator
- **Tailwind CSS v4** - Utility-first styling
- **TypeScript** - Type safety
- **Leaflet** - Interactive maps
- **Biome** - Code formatting and linting

## Contributing

We welcome contributions of all kinds! Please read our [Contributing Guide](CONTRIBUTING.md) for:

- Development environment setup
- Code style and standards
- Accessibility requirements
- Testing procedures
- Pull request workflow

Quick checklist before submitting:
- Run `pnpm check` and `pnpm lint`
- Test accessibility with keyboard navigation
- Verify responsive design across screen sizes

## Site Structure

- **Home** - Main landing page with hero and features
- **About Us** - Team, mission, and organizational information
- **Mahi (Programs)** - Core educational programs:
  - Sessions - Interactive session finder with map
  - Workshops - Workshop offerings and registration
  - Events - Upcoming events and activities
  - PLD - Professional development programs
- **Support Us** - Donation and partnership information
- **Contact** - Contact form and information
- **Safety/Privacy** - Policies and guidelines

## Deployment

Automatically deployed via GitHub Actions:
- Production deployment on `main` branch
- Preview builds for pull requests
- Automated testing and quality checks

## License

Licensed under the GNU Affero General Public License v3.0 (AGPLv3). See [LICENSE](LICENSE) for details.

This copyleft license ensures the code remains free and open source, requiring any network service using this code to also provide its source to users.

## Acknowledgments

Built with [Astro](https://astro.build/), styled with [Tailwind CSS](https://tailwindcss.com/), maps by [OpenStreetMap](https://www.openstreetmap.org/), icons by [Heroicons](https://heroicons.com/), and analytics by [Plausible](https://plausible.io/).
