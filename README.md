# Gatsby site using NetlifyCMS with local file-system api in dev mode

Check out the project from github:

```
git clone https://github.com/bjrn/gatsby-with-netlify-cms.git
cd gatsby-with-netlify-cms
yarn
```

Start develop mode:

```
yarn develop
```

After startup, there's a local website running on localhost:8000.

The editor is located under <http://localhost:8000/admin/>.
In development mode, editing documents is file-based,
ie. saving a document will update the document on your harddrive, unlike editing on the built site, where document changes result in Pull Requests that can be merged via the publish button in the built-in workflow (if `editorial_mode` is enabled).

Local editing is great for making changes in many documents at once, or for migrating content from other sites.

## fs-api functionality by @talves

see repo for a create-react-app version:
<https://github.com/talves/netlify-cms-react-example>
