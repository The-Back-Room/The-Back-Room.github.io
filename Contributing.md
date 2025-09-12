---
title: Contributing guidelines
summary: Guidelines for contributing to The Back Room documentation.
nav_exclude: true
permalink: /Contributing
---

## Contributing Guidelines
We welcome contributions to The Back Room documentation! Whether you're fixing a typo, adding new content, or improving existing pages, your help is appreciated. Please follow these guidelines to ensure a smooth contribution process.

### Navigational Structure
- **Parent and Grandparent Pages**: Ensure that each page has a clear parent and, if applicable, a grandparent page. This helps maintain a logical hierarchy and makes it easier for users to navigate the documentation.
- **Navigation Order**: Use the `nav_order` attribute in the front matter to specify the order of pages within their parent. This helps organize content in a way that makes sense to users. *(Use increments of 0.1 for sub-pages, e.g., 1.1, 1.2, etc.)*
- **Excluding Pages from Navigation**: If a page should not appear in the navigation menu, use the `nav_exclude: true` attribute in the front matter.
- **Permalinks**: Use the `permalink` attribute to create user-friendly URLs for each page. This improves SEO and makes it easier for users to remember and share links.

### Content Guidelines
- **No Outside Sources**: To ensure the authenticity of our sources, all projects must be hosted from our [GitLab repository](https://gitlab.com/the-back-room/). There will be no exceptions to this rule.
- **Clarity and Conciseness**: Write clear and concise content. Avoid jargon and explain technical terms when necessary.
- **Formatting**: Use Markdown formatting to structure your content. Utilize headings, lists, and code blocks to enhance readability.
- **Images and Media**: Include relevant images or media to support your content. Ensure that you have the right to use any images you include.
- **Links**: Use relative links for internal documentation references and absolute links for external resources.
- **Code Snippets**: When including code snippets, use fenced code blocks with appropriate language identifiers for syntax highlighting.
- **Citations and References**: If you reference external sources, provide proper citations and links to the original content.
- **Review and Proofreading**: Before submitting your contribution, review your content for accuracy, grammar, and spelling.
- **Testing**: If your contribution includes code or technical instructions, ensure that they have been tested and work as expected.
- **Respect Copyright**: Ensure that all content you contribute is original or properly attributed. Do not include copyrighted material without permission.


### Submission Process
1. **Fork the Repository**: Start by forking The Back Room documentation repository to your GitHub account.
2. **Create a New Branch**: Create a new branch for your changes. Use a descriptive name that reflects the nature of your contribution (e.g., `fix-typo`, `add-new-theme`).
3. **Make Your Changes**: Implement your changes following the guidelines outlined above.
4. **Commit Your Changes**: Write clear and descriptive commit messages that explain the purpose of your changes.
5. **Push to Your Fork**: Push your changes to your forked repository on GitHub.
6. **Create a Pull Request**: Navigate to the original repository and create a pull request from your forked branch. Provide a detailed description of your changes and any relevant context.
7. **Review Process**: Your pull request will be reviewed by the maintainers. Be responsive to feedback and make any necessary revisions.
8. **Merge**: Once approved, your changes will be merged into the main documentation.

### Licensing
By contributing to The Back Room documentation, you agree that your contributions will be licensed under the [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/) license.

### Support
If you have any questions or need assistance with your contribution, please reach out to the maintainers via the repository's issue tracker or contact us directly on our [Discord](https://discord.gg/Yxj2t8ZbvX).
Thank you for helping to improve The Back Room documentation!