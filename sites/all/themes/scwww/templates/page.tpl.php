<div id="page" class="<?php print $classes; ?>"<?php print $attributes; ?>>

  <!-- ______________________ HEADER _______________________ -->

  <header id="header">
    <div id="disclaimer"><div class="container">We are currently working on this website as an ongoing development project. <a href="http://digital.southbankcentre.co.uk/an-ongoing-experiment/" target="_blank">Click here</a> to find out more.</div></div>
    <div class="container">

      <?php print $messages; ?>
      <?php print render($page['help']); ?>


        <div id="header-region">

            <?php if ($logo): ?>
                <a href="http://www.southbankcentre.co.uk" title="<?php print t('Home'); ?>" target="_blank" rel="home" id="logo">
                    <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>"/>
                </a>
            <?php endif; ?>

        <?php // if ($page['header']): ?>
            <?php print render($page['header']); ?>

            <?php if ($main_menu || $secondary_menu): ?>
                <nav id="navigation" class="menu <?php if (!empty($main_menu)) {print "with-primary";}
                if (!empty($secondary_menu)) {print " with-secondary";} ?>">
                    <a href="#" id="mobile-menu-icon" data-toggle="collapse" data-target="#primary">Menu</a>
                    <?php print theme('links', array('links' => $main_menu, 'attributes' => array('id' => 'primary', 'class' => array('links', 'clearfix', 'main-menu', 'collapse')))); ?>
                    <?php // print theme('links', array('links' => $secondary_menu, 'attributes' => array('id' => 'secondary', 'class' => array('links', 'clearfix', 'sub-menu')))); ?>
                </nav> <!-- /navigation -->
            <?php endif; ?>

            <h3>SOUTHBANK CENTRE'S</h3>
            <h2>Web We Want<br>
                <span>Festival</span></h2>

        <?php // endif; ?>
        </div>
    </div>
  </header> <!-- /header -->

  <!-- ______________________ MAIN _______________________ -->

  <div id="main">
    <div class="container group">


       <?php if ($page['sidebar_first']): ?>
            <aside id="region-sidebar-first" class="column sidebar first col-3">
                <?php print render($page['sidebar_first']); ?>
            </aside>
        <?php endif; ?> <!-- /sidebar-first -->

      <?php if ($page['pre_content']): ?>
            <div id="region-pre-content" class="col-9"><?php print render($page['pre_content']) ?></div>
        <?php endif; ?> <!-- /pre-content -->


      <section id="content" class="col-9">
  
          <?php if ($breadcrumb || $title|| $messages || $tabs || $action_links): ?>
            <div id="content-header">

              <?php // print $breadcrumb; ?>

              <?php print render($title_prefix); ?>

              <?php if ($title): ?>
                <h1 class="title"><?php print $title; ?></h1>
              <?php endif; ?>

              <?php print render($title_suffix); ?>

              <?php if ($tabs): ?>
                <div class="tabs"><?php print render($tabs); ?></div>
              <?php endif; ?>

              <?php if ($action_links): ?>
                <ul class="action-links"><?php print render($action_links); ?></ul>
              <?php endif; ?>

            </div> <!-- /#content-header -->
          <?php endif; ?>

          <div id="content-area">
            <?php print render($page['content']) ?>
          </div>

          <?php print $feed_icons; ?>

      </section> <!-- /content-inner /content -->

      <?php if ($page['sidebar_second']): ?>
        <aside id="region-sidebar-second" class="column sidebar second col-3">
          <?php print render($page['sidebar_second']); ?>
        </aside>
      <?php endif; ?> <!-- /sidebar-second -->

        <?php if ($page['post_content']): ?>
            <section id="region-post-content" class="col-12">
                <?php print render($page['post_content']); ?>
            </section>
        <?php endif; ?> <!-- /post_content-->

    </div>
  </div> <!-- /main -->

  <!-- ______________________ FOOTER _______________________ -->

    <footer id="footer">
        <div class="container group">
          <?php if ($page['footer_firstcolumn']): ?>
              <div id="region-sc-info" class="col-6">
                <?php print render($page['footer_firstcolumn']); ?>
              </div>
          <?php endif; ?>
          <?php if ($page['footer_secondcolumn']): ?>
              <div id="region-sc-address" class="col-2">
                <?php print render($page['footer_secondcolumn']); ?>
              </div>
          <?php endif; ?>
          <?php if ($page['footer_thirdcolumn']): ?>
              <div id="region-social-menu" class="col-2">
                <?php print render($page['footer_thirdcolumn']); ?>
              </div>
          <?php endif; ?>
          <?php if ($page['footer_fourthcolumn']): ?>
              <div id="region-partners" class="col-2">
                <?php print render($page['footer_fourthcolumn']); ?>
              </div>
          <?php endif; ?>
        </div>
    </footer> <!-- /footer -->

</div><!-- /page -->