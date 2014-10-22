<?php if ($has_links): ?>
    <div class="page-links clearfix">
        <?php if ($prev_url): ?>
            <a href="<?php print $prev_url; ?>" class="page-previous" title="<?php print t('Go to previous page'); ?>"><?php print t('Previous <br>Question') ?></a>
        <?php endif; ?>
        <?php if ($parent_url): ?>
            <a href="<?php print $parent_url; ?>" class="page-up" title="<?php print t('Go to parent page'); ?>"><?php print t('up'); ?></a>
        <?php endif; ?>
        <?php if ($next_url): ?>
            <a href="<?php print $next_url; ?>" class="page-next" title="<?php print t('Go to next page'); ?>"><?php print t('Next <br>Question'); ?></a>
        <?php endif; ?>
    </div>
<?php endif; ?>