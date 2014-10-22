<article id="event-<?php print $node->nid; ?>" class="<?php print $classes; ?>">

  <?php if ($title_prefix || $title_suffix || $display_submitted || $unpublished || !$page && $title): ?>
    <header>
      <?php print render($title_prefix); ?>
      <?php if (!$page && $title): ?>
        <?php print render($content['field_event_date_string']); ?>
        <h2<?php print $title_attributes; ?>><a href="<?php print url("node/21",array('fragment'=>'event-' . $node->nid)); ?>"><?php print $title; ?></a></h2>
      <?php endif; ?>
      <?php print render($title_suffix); ?>

      <?php if ($display_submitted): ?>
        <div class="submitted">
          <?php print $user_picture; ?>
          <?php print $submitted; ?>
        </div>
      <?php endif; ?>

      <?php if ($unpublished): ?>
        <p class="unpublished"><?php print t('Unpublished'); ?></p>
      <?php endif; ?>
    </header>
  <?php endif; ?>

  <div class="content">
    <?php
      // dpm($content);
      // We hide the comments to render below.
      hide($content['comments']);
      hide($content['links']);
      // print render($content);
      print render($content['field_venue']);
      print render($content['field_event_booking_link']);
    ?>
    <?php if (!isset($content['field_event_booking_link'])) : ?>
        <div class="free-event-btn">Free - Just turn up</div>
    <?php endif; ?>
  </div> <!-- /content -->

  <?php if (!empty($content['links']['terms'])): ?>
    <div class="terms">
      <?php print render($content['links']['terms']); ?>
    </div> <!-- /terms -->
  <?php endif;?>

  <?php if (!empty($content['links'])): ?>
    <div class="links">
      <?php print render($content['links']); ?>
    </div> <!-- /links -->
  <?php endif; ?>

  <?php print render($content['comments']); ?>
</article> <!-- /article #node -->