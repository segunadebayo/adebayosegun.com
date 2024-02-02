const uniq = (arr) => Array.from(new Set(arr));

const tags = uniq([
  'thoughts',
  'chakra',
  'design-system',
  'roadmap',
  'finance',
  'hiring',
  'stock',
  'testing',
  'react',
  'career',
  'interview',
  'panda',
  'github-actions',
  'ci',
]);

/**
 * @param {import("plop").NodePlopAPI} plop
 */
function run(plop) {
  plop.setGenerator('blog:create', {
    description: 'Create a new blog',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of the blog?',
      },
      {
        type: 'checkbox',
        name: 'tags',
        message: 'What are the tags for the blog?',
        choices: tags,
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of the blog?',
        default: 'Some description about the blog',
      },
    ],
    actions: (data) => {
      return [
        {
          type: 'add',
          path: 'data/blog/{{kebabCase title}}.mdx',
          templateFile: 'templates/blog.mdx.hbs',
          data: {
            title: data.title,
            tags: data.tags,
            description: data.description,
            publishedAt: new Date().toISOString().split('T')[0],
          },
        },
      ];
    },
  });
}

export default run;
