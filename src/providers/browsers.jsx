import {
  ArcBrowser,
  ChromeBrowser,
} from "@enhanced-jax/react-browser-containers";
import { useState } from "react";

function ThemedArcBrowser() {
  const theme = {
    theme: "light",
    bg: "linear-gradient(210deg, #70818F 0%, #85738D 100%)",
    text: "#e8e9f9",
    contentBg: "whitesmoke",
    contentText: "#000",
    border: "#363646",
    tabBarBg: "transparent",
    searchBarBg: "rgba(255,255,255,0.2)",
    tabDivider: "rgba(255,255,255,0.2)",
    tabHoverBg: "rgba(255,255,255,0.2)",
    tabSelectedBg: "rgba(235,235,255,0.2)",
  };

  return <ArcBrowser useContentSize lightTheme={theme} />;
}

function ChromeBrowserWithTabs({ theme }) {
  const [tab, setTab] = useState(0);
  const tabs = [
    {
      name: "Example",
      link: "https://example.com",
      content: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "640px",
            height: "480px",
          }}
        >
          👋🏻 Welcome to React Browser Containers!
        </div>
      ),
      icon: (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#3C82F6",
            borderRadius: "50%",
          }}
        />
      ),
    },
    {
      name: "Click me!",
      link: "https://example.com",
      content: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "440px",
            height: "700px",
          }}
        >
          ✨ With tabs functionality!
        </div>
      ),
      icon: (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#E45549",
            borderRadius: "50%",
          }}
        />
      ),
    },
  ];

  return (
    <ChromeBrowser
      theme={theme}
      useContentSize={true}
      tabs={tabs}
      tab={tab}
      setTab={setTab}
    />
  );
}

function ArcBrowserWithTabs() {
  const [tab, setTab] = useState(0);
  const tabs = [
    {
      name: "Example",
      link: "https://example.com",
      content: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          👋🏻 Welcome to React Browser Containers!
        </div>
      ),
      icon: (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#3C82F6",
            borderRadius: "50%",
          }}
        />
      ),
    },
    {
      name: "Click me!",
      link: "https://example.com",
      content: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          ✨ With tabs functionality!
        </div>
      ),
      icon: (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#E45549",
            borderRadius: "50%",
          }}
        />
      ),
    },
  ];
  return (
    <div style={{ width: "640px", height: "480px" }}>
      <ArcBrowser tabs={tabs} tab={tab} setTab={setTab} />
    </div>
  );
}

export const browsers = [
  {
    title: "Basic usage",
    Component: <ArcBrowserWithTabs />,
    code: `
  import { ArcBrowser } from "@enhanced-jax/react-browser-containers";
  import { useState } from "react";
  
  function ArcBrowserWithTabs() {
    const [tab, setTab] = useState(0);
    return (
      <div style={{ width: "640px", height: "480px" }}>
        <ArcBrowser
          tabs={tabs}
          tab={tab}
          setTab={setTab}
        />
      </div>
    ); // by default, browser fills it's parent element
  };
  
  // ====== tabs =========
  
  const tabs = [
    {
      name: "Example",
      link: "https://example.com",
      content: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          👋🏻 Welcome to React Browser Containers!
        </div>
      ),
      icon: (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#3C82F6",
            borderRadius: "50%",
          }}
        />
      ),
    },
    {
      name: "Click me!",
      link: "https://example.com",
      content: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          ✨ With tabs functionality!
        </div>
      ),
      icon: (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#E45549",
            borderRadius: "50%",
          }}
        />
      ),
    },
  ];
  `,
  },
  {
    light: {
      title: "Respect content size (light mode)",
      Component: <ChromeBrowserWithTabs theme="light" />,
      code: `
    import { ChromeBrowser } from "@enhanced-jax/react-browser-containers";
    import { useState } from "react";
    
    function ChromeBrowserWithTabs() {
      const [tab, setTab] = useState(0);
    
      return (
          <ChromeBrowser
            theme="light"
            tabs={tabs}
            tab={tab}
            setTab={setTab}
            useContentSize
          />
      );
    }; // you can set useContentSize to respect the content size
    
    // ====== tabs =========
    
    const tabs = [
        {
          name: "Example",
          link: "https://example.com",
          content: (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "640px",
                height: "480px",
              }}
            >
              👋🏻 Welcome to React Browser Containers!
            </div>
          ),
          icon: (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#3C82F6",
                borderRadius: "50%",
              }}
            />
          ),
        },
        {
          name: "Click me!",
          link: "https://example.com",
          content: (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "440px",
                height: "700px",
              }}
            >
              ✨ With tabs functionality!
            </div>
          ),
          icon: (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#E45549",
                borderRadius: "50%",
              }}
            />
          ),
        },
      ];
      `,
    },
    dark: {
      title: "Respect content size (dark mode)",
      Component: <ChromeBrowserWithTabs theme="dark" />,
      code: `
    import { ChromeBrowser } from "@enhanced-jax/react-browser-containers";
    import { useState } from "react";
    
    function ChromeBrowserWithTabs() {
      const [tab, setTab] = useState(0);
    
      return (
          <ChromeBrowser
            theme="dark"
            tabs={tabs}
            tab={tab}
            setTab={setTab}
            useContentSize
          />
      );
    }; // you can set useContentSize to respect the content size
    
    // ====== tabs =========
    
    const tabs = [
        {
          name: "Example",
          link: "https://example.com",
          content: (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "640px",
                height: "480px",
              }}
            >
              👋🏻 Welcome to React Browser Containers!
            </div>
          ),
          icon: (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#3C82F6",
                borderRadius: "50%",
              }}
            />
          ),
        },
        {
          name: "Click me!",
          link: "https://example.com",
          content: (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "440px",
                height: "700px",
              }}
            >
              ✨ With tabs functionality!
            </div>
          ),
          icon: (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#E45549",
                borderRadius: "50%",
              }}
            />
          ),
        },
      ];
      `,
    },
  },
  {
    title: "Custom theme",
    Component: <ThemedArcBrowser />,
    code: `
    import { ArcBrowser } from "@enhanced-jax/react-browser-containers";

    function ThemedArcBrowser() {
  const theme = {
    theme: "light",
    bg: "linear-gradient(210deg, #70818F 0%, #85738D 100%)",
    text: "#e8e9f9",
    contentBg: "whitesmoke",
    contentText: "#000",
    border: "#363646",
    tabBarBg: "transparent",
    searchBarBg: "rgba(255,255,255,0.2)",
    tabDivider: "rgba(255,255,255,0.2)",
    tabHoverBg: "rgba(255,255,255,0.2)",
    tabSelectedBg: "rgba(235,235,255,0.2)",
  };

  return <ArcBrowser useContentSize lightTheme={theme} />;
} // you can apply two different themes at the same time, with the darkTheme prop
    `,
  },
];
