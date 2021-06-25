export default {
  repository:
    "https://github.com/mickykebe/book-economic-policy-thoughts-for-today-and-tomorrow", // project repo
  docsRepository:
    "https://github.com/mickykebe/book-economic-policy-thoughts-for-today-and-tomorrow", // docs repo
  branch: "master", // branch of docs
  path: "/", // path of docs
  titleSuffix: "",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `ኢኮኖሚክ ፖሊሲ። ሀሳቦች ለዛሬ እና ለነገ።`,
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <>
      <span className="font-extrabold text-xl hidden md:inline">
        ኢኮኖሚክ ፖሊሲ - ሀሳቦች ለዛሬ እና ለነገ
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="ኢኮኖሚክ ፖሊሲ። ሀሳቦች ለዛሬ እና ለነገ። ሶስተኛው እትም።"
      />
      <meta name="og:title" content="ኢኮኖሚክ ፖሊሲ። ሀሳቦች ለዛሬ እና ለነገ። ሶስተኛው እትም።" />
    </>
  ),
};
