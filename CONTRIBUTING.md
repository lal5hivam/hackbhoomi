# 🤝 Contributing to HackBhoomi 2025

Thank you for your interest in contributing to HackBhoomi 2025! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm, yarn, or pnpm
- Git
- Basic knowledge of React, Next.js, and TypeScript

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/hackbhoomi-2025.git
   cd hackbhoomi-2025
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📋 How to Contribute

### 🐛 Reporting Bugs
1. Check if the bug has already been reported in [Issues](https://github.com/yourusername/hackbhoomi-2025/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Environment details (OS, browser, etc.)

### ✨ Suggesting Features
1. Check existing [Issues](https://github.com/yourusername/hackbhoomi-2025/issues) and [Discussions](https://github.com/yourusername/hackbhoomi-2025/discussions)
2. Create a new issue with:
   - Clear feature description
   - Use case and benefits
   - Possible implementation approach
   - Mockups or examples (if applicable)

### 🔧 Code Contributions

#### Branch Naming Convention
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `style/description` - UI/styling changes

#### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes**
   - Follow the coding standards below
   - Add tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   npm run build
   npm run lint
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Create a Pull Request**
   - Use a clear title and description
   - Reference related issues
   - Add screenshots for UI changes
   - Request review from maintainers

## 📝 Coding Standards

### TypeScript
- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` type when possible
- Use meaningful variable and function names

### React Components
- Use functional components with hooks
- Follow the existing component structure
- Use proper prop types and interfaces
- Implement proper error boundaries

### Styling
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Maintain consistent spacing and colors
- Use CSS variables for theme colors

### File Organization
```
components/
├── ui/              # Reusable UI components
├── ComponentName.tsx # Feature-specific components
└── index.ts         # Export barrel files

app/
├── (routes)/        # Route groups
├── globals.css      # Global styles
└── layout.tsx       # Layouts
```

### Code Quality
- Write clean, readable code
- Add comments for complex logic
- Use meaningful commit messages
- Follow the existing code style

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests
- Write unit tests for utility functions
- Add integration tests for components
- Test accessibility features
- Test responsive behavior

## 📚 Documentation

### Code Documentation
- Add JSDoc comments for functions
- Document component props and usage
- Include examples in documentation
- Keep README.md updated

### Commit Messages
Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add tests
chore: maintenance tasks
```

## 🎯 Areas for Contribution

### High Priority
- 🐛 Bug fixes and performance improvements
- 📱 Mobile responsiveness enhancements
- ♿ Accessibility improvements
- 🔒 Security enhancements

### Medium Priority
- ✨ New features and components
- 🎨 UI/UX improvements
- 📊 Analytics and tracking
- 🌐 Internationalization

### Low Priority
- 📝 Documentation improvements
- 🧪 Additional tests
- 🔧 Developer experience improvements
- 🎭 Animations and micro-interactions

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- GitHub contributors page
- Project documentation
- Special mentions in releases

## 📞 Getting Help

### Communication Channels
- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - General questions and ideas
- **Email** - [l.singhshivam1@gmail.com](mailto:l.singhshivam1@gmail.com)

### Code Review Process
1. All PRs require at least one review
2. Maintainers will review within 48 hours
3. Address feedback promptly
4. Squash commits before merging

## 📋 Checklist

Before submitting a PR, ensure:

- [ ] Code follows the style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated and passing
- [ ] Documentation updated
- [ ] No console.log statements
- [ ] Responsive design tested
- [ ] Accessibility checked
- [ ] Performance impact considered

## 🙏 Thank You

Your contributions help make HackBhoomi 2025 better for everyone. Whether it's code, documentation, bug reports, or feature suggestions - every contribution matters!

---

**Happy Contributing! 🚀**

For questions about this guide, please open an issue or reach out to the maintainers.