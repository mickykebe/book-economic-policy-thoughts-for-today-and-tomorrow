import { useRouter } from "next/router";

export default {
  project: {
    link: "https://github.com/mickykebe/book-economic-policy-thoughts-for-today-and-tomorrow",
  },
  docsRepositoryBase:
    "https://github.com/mickykebe/book-economic-policy-thoughts-for-today-and-tomorrow", // docs repo
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - (ኢኮኖሚክ ፖሊሲ - ሀሳቦች ለዛሬ እና ለነገ)",
      };
    }
  },
  editLink: {
    text: "ለማስተካከል ይህንን ይጫኑ",
  },
  feedback: {
    content: "ጥያቄ ወይም አስተያየት ይስጡን",
  },
  footer: {
    text: (
      <>
        <span>ኢኮኖሚክ ፖሊሲ - ሀሳቦች ለዛሬ እና ለነገ</span>
      </>
    ),
  },
  logo: (
    <>
      <span className="font-extrabold text-xl hidden md:inline">
        ኢኮኖሚክ ፖሊሲ - ሀሳቦች ለዛሬ እና ለነገ
      </span>
    </>
  ),
  head: (
    <>
      <title>ኢኮኖሚክ ፖሊሲ - ሀሳቦች ለዛሬ እና ለነገ</title>
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="am" />
      <meta
        name="description"
        content="ኢኮኖሚክ ፖሊሲ - ሀሳቦች ለዛሬ እና ለነገ። ሶስተኛው እትም"
      />
      <meta name="og:title" content="ኢኮኖሚክ ፖሊሲ - ሀሳቦች ለዛሬ እና ለነገ" />
      <meta
        name="og:description"
        content="ኢኮኖሚክ ፖሊሲ። ሀሳቦች ለዛሬ እና ለነገ። ሶስተኛው እትም።"
      />
      <meta
        name="twitter:site:domain"
        content="https://book-economic-policy-thoughts-for-today-and-tomorrow.vercel.app/"
      />
    </>
  ),
};
