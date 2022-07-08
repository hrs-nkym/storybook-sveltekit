<script>
  import "./total.css";
  import { createEventDispatcher } from "svelte";
  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * What background color to use
   */
  export let backgroundColor;
  /**
   * How large should the total be?
   */
  export let size = "medium";

  let mode = primary
    ? "storybook-total--primary"
    : "storybook-total--secondary";

  let style = backgroundColor ? `background-color: ${backgroundColor}` : "";

  const dispatch = createEventDispatcher();

  /**
   * Optional click handler
   */
  function onClick(event) {
    dispatch("click", event);
  }

  export let cnt = "";
</script>

<div
  class={["count-controls", `storybook-total--${size}`, mode].join(" ")}
  {style}
>
  <!-- Count: ({stateMeta.pagination.total}) -->
  Total Count: ( {cnt} )
</div>
