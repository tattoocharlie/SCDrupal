; web_we_want_festival make file for local development
core = "7.x"
api = "2"

projects[drupal][version] = "7.x"
; include the d.o. profile base
includes[] = "drupal-org.make"

; +++++ Patches +++++

projects[admin_menu][patch][] = "admin_menu-remove-ie6-support-1892074-5.patch" ; TODO add path to patch

