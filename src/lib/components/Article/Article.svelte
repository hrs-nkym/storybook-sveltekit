<script>
  import "./article.css";
  import { createEventDispatcher } from "svelte";
  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * What background color to use
   */
  export let backgroundColor;

  let mode = primary
    ? "storybook-article--primary"
    : "storybook-article--secondary";

  let style = backgroundColor ? `background-color: ${backgroundColor}` : "";

  const dispatch = createEventDispatcher();

  /**
   * Optional click handler
   */
  function onClick(event) {
    dispatch("click", event);
  }

  export let article = "";
</script>

<div class="mb-4">
  <h2 class="h4">{article.id} - {article.attributes.title}</h2>
  <p class="mb-1">{article.attributes.description}</p>
</div>
