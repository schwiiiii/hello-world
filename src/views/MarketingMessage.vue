<template>
  <div class="page__marketing-message">
    <h1>Marketing Message Component</h1>
    <p>
      Minimal marketing message component with configurable title, text, and cta
      as well as multiple events.
    </p>

    <h2>Basic example</h2>

    <MarketingMessage :data="marketingData" />

    <h2 class="mt-4">HTML</h2>
    <div v-highlight>
      <pre
        class="language-html"
      ><code>&lt;MarketingMessage :data="marketingData" /&gt;</code></pre>
    </div>

    <h2 class="mt-4">Data Object</h2>
    <div v-highlight>
      <pre class="language-json"><code>marketingData: {
    slides: [
        {
            title: 'Slide 1 Title Text',
            body: "&lt;p&gt;this is slide 1's body content&lt;/p&gt;&lt;p&gt;now with a second line&lt;/p&gt;",
            image: 'slide1.jpg'
            cta: {
                text: "Click me",
                link: "https://google.com/",
                title: "External link to google"
            },
        },
        {
            title: 'Slide 2 Title Text',
            body: "&lt;p&gt;this is slide 2's body content&lt;/p&gt;",
            image: 'slide2.jpg'
            cta: {
                text: "Click me",
                link: "https://google.com/",
                title: "External link to google"
            },
        }
    ]
}</code></pre>
    </div>
  </div>
</template>

<script>
import MarketingMessage from "./../components/MarketingMessage";

export default {
  name: "Marketing Message",
  data() {
    return {
      marketingData: {
        slides: [
          {
            title: "Slide 1 Title Text",
            body:
              "<p>this is slide 1's body content</p><p>now with a second line</p>",
            image: "slide1.jpg",
            cta: {
              text: "Click me",
              link: "https://google.com/",
              title: "External link to google"
            }
          },
          {
            title: "Slide 2 Title Text",
            body: "<p>this is slide 2's body content</p>",
            image: "slide2.jpg",
            cta: {
              text: "Click me",
              link: "https://google.com/",
              title: "External link to google"
            }
          }
        ]
      }
    };
  },
  components: {
    MarketingMessage
  }
};
</script>
