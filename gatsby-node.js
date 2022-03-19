const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(sass|less|scss|css)$/,
          use: [
            'sass-loader',
            loaders.postcss(),
          ],
        },
      ],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
  })
}

exports.onCreateNode = async ({node, getNode, reporter, cache, loadNodeContent, actions, createNodeId }) => {
  const { createNode } = actions;
  const { name, sourceInstanceName, absolutePath, internal, extension } = node;
  const { contentDigest, type } = internal;

  if ('Directory' === type) {
    return;
  }

  if ('calendar' === sourceInstanceName) {

    const event = yaml.load(fs.readFileSync(absolutePath, 'utf-8'));
    const { description, title, date } = event;

    const resourceNode = {
      path: `calendar/${name}`,
      id: createNodeId(`${node.id}`),
      title,
      description,
      date,
      children: [],
      parent: node.id,
      internal: {
        contentDigest,
        type: 'calendar',
      },
    };

    createNode(resourceNode);
  }
}

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return Promise.all([
//     calendarEntry(graphql, createPage),
//   ])
// }

const calendarEntry = (graphql, createPage) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allCalendar {
          edges {
            node {
              id
              path
              title
              date
              description
            }
          }
        }
      }
    `
    ).then(result => {

      result.data.allCalendar.edges.map(({ node }) => {
        const { date, title, description } = node;
        createPage({
          path: node.path,
          component: path.resolve('./src/templates/calendarEntry.js'),
          context: {
            id: node.id,
            title,
            date,
            description,
          }
        })
      });
      resolve()
    })
  });
}