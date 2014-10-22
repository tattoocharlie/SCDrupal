<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?>">

  <?php // dpm($content["field_hashtags"]); print ('hello'); ?>

  <?php if ($title_prefix || $title_suffix || $display_submitted || $unpublished || !$page && $title): ?>
    <header>
      <?php print render($title_prefix); ?>
      <?php if (!$page && $title): ?>
        <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
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
      // We hide the comments to render below.
      hide($content['comments']);
      hide($content['links']);
      // print render($content);
      // print $title;
      //print ($content['title_field']['und'][0]['taxonomy_term']->name);
    //print $content['title_field']['und'][0]['taxonomy_term']->name;
    //print $node->title_field;
    //$node = node_load($nid);
    //$field = field_get_items('node', $node, 'title_field');
    //print (field_view_value('node', $node, 'title_field', $field[0])); ?>
    <h3><a href="<?php print $node_url; ?>" style="color: <?php print render($content['field_question_colour'][0]);?>;"><?php print render($content['title_field'][0]); ?></a></h3>
    <div class="question-links group" style="background: <?php print render($content['field_question_colour'][0]);?>;">
    <?php // print render($content['field_hashtags']); ?>
      <div class="question-hashtag"><?php print render($content['field_hashtags']);?></div>
      <a href="<?php print $node_url; ?>" class="get-involved-btn">Get involved</a>
    </div>

    <?php // print_r(array_keys(get_defined_vars())); ?>
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