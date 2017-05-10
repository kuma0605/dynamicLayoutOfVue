
<template>
  

<div class="markdown-body">
<h1 id="toc_0">CSS3 columns</h1>

<p>syntax: </p>

<pre><code>    columns: column-width column-count;
</code></pre>

<p>example:</p>

<pre><code>div
{
    columns:100px 3;
    -moz-columns:100px 3; /* Firefox */
    -webkit-columns:100px 3; /* Safari 和 Chrome */
}
</code></pre>

<p><strong>Note</strong>:</p>

<blockquote>
<p>column-width works when it greater then / equal to ( viewport-width / column-count )</p>
</blockquote>

<hr/>

<h2 id="toc_1">Additional property</h2>

<p>There are additional two properties you can set as follows:<br/>
* column-gap, <br/>
* column-rule</p>

<h3 id="toc_2">column-gap</h3>

<p>description: specify gap between the columns.</p>

<p>example:</p>

<pre><code>div {
    -webkit-column-count: 3; /* Chrome, Safari, Opera */
    -moz-column-count: 3; /* Firefox */
    column-count: 3;

    -webkit-column-gap: 40px; /* Chrome, Safari, Opera */
    -moz-column-gap: 40px; /* Firefox */
    column-gap: 40px;
}
</code></pre>

<h3 id="toc_3">column-rule</h3>

<p>description: specify the width, style and color of the rule between columns.</p>

<p>example:</p>

<pre><code>div {
    -webkit-column-count: 3; /* Chrome, Safari, Opera */
    -moz-column-count: 3; /* Firefox */
    column-count: 3;

    -webkit-column-gap: 40px; /* Chrome, Safari, Opera */
    -moz-column-gap: 40px; /* Firefox */
    column-gap: 40px;

    -webkit-column-rule: 4px outset #ff00ff; /* Chrome, Safari, Opera */
    -moz-column-rule: 4px outset #ff00ff; /* Firefox */
    column-rule: 4px outset #ff00ff;
}
</code></pre>

<br><br><br><br>

</div>
</template>
<style>
  @import '../../css/mweb-markdown.css';
</style>
<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>
