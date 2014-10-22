<div id="block-<?php print $block_html_id; ?>" class="<?php print $classes; ?> group"<?php print $attributes; ?>>
  <div class="block-inner">
    <?php print render($title_prefix); ?>
    <?php if ($block->subject): ?>
      <h3 class="block-title"<?php print $title_attributes; ?>><?php print $block->subject ?></h3>
    <?php endif;?>
    <?php print render($title_suffix); ?>
    <div class="content" <?php print $content_attributes; ?>>
      <?php print $content; ?>
    </div>
  </div>
</div><!-- /block-inner /block -->