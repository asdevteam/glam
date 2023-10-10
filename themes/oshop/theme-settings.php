<?php

use Drupal\Component\Utility\Html;
use Drupal\Core\Form\FormStateInterface;
use Drupal\system\Form\ThemeSettingsForm;
use Drupal\file\Entity\File;
use Drupal\Core\Url;

function oshop_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state) {
    $theme_file = drupal_get_path('theme', 'oshop') . '/theme-settings.php';
    $build_info = $form_state->getBuildInfo();
    if (!in_array($theme_file, $build_info['files'])) {
        $build_info['files'][] = $theme_file;
    }
    $form_state->setBuildInfo($build_info);

    $form['#submit'][] = 'oshop_theme_settings_form_submit';


        $form['settings'] = array(
        '#type' => 'details',
        '#title' => t('Theme settings'),
        '#open' => TRUE,
        '#attached' => array(
            'library' =>  array(
            'oshop/admin-lib'
          ),
        ),


       
    );


    $form['settings']['general_setting'] = array(
        '#type' => 'details',
        '#title' => t('General Settings'),
        '#open' => FALSE,
    );

    $form['settings']['general_setting']['general_setting_tracking_code'] = array(
        '#type' => 'textarea',
        '#title' => t('Tracking Code'),
        '#default_value' => theme_get_setting('general_setting_tracking_code', 'oshop'),
    );



// Contact Setting
    $form['settings']['contact'] = array(
        '#type' => 'details',
        '#title' => t('Contact Settings'),
        '#open' => FALSE,
    );
    $form['settings']['contact']['contact_layout'] = array(
    '#type' => 'select',
    '#title' => t('Contact Settings'),
    '#options' => array(
        'style1' => t('Style 1'),
        'style2' => t('Style 2'),
    ),
    '#required' => true,
    '#default_value' => theme_get_setting('contact_layout', 'oshop'),
    );
 
// $form color setting
    $form['settings']['color'] = array(
        '#type' => 'details',
        '#title' => t('Color settings'),
        '#open' => FALSE,
    );
    $form['settings']['color']['color_header'] = array(
        '#type' => 'textarea',
        '#title' => t('Color Header'),
        '#default_value' => theme_get_setting('color_header','oshop')
    );
    $form['settings']['color']['color_footer'] = array(
        '#type' => 'textarea',
        '#title' => t('Color Footer'),
        '#default_value' => theme_get_setting('color_footer','oshop')
    );

    $form['settings']['color']['choose_color'] = array(
        '#type' => 'radios',
        '#title' => t('Choose Color'),
        '#options' => array(
            'theme-default' => t('Style 1'),
            'theme-mediumseagreen' => t('Style 2'),
            'theme-orange' => t('Style 3'),
            'theme-blue' => t('Style 4'),
            'theme-yellow' => t('Style 5'),
        ),
        '#required' => true,
        '#attributes' => array(
            'class' => array('them_choose_color'),
        ),
        '#default_value' => theme_get_setting('choose_color', 'oshop'),
    );

// page settings
    $form['settings']['page_title'] = array(
        '#type' => 'details',
        '#title' => t('Page settings'),
        '#open' => FALSE,
    );
    $form['settings']['page_title']['default_breadcrumb_image'] = array(
        '#type'     => 'managed_file',
        '#title'    => t('Page title background image upload'),
        '#required' => FALSE,
        '#upload_location' => 'public://background/',
        '#default_value' => theme_get_setting('default_breadcrumb_image','oshop'),
        '#upload_validators' => array(
            'file_validate_extensions' => array('gif png jpg jpeg'),
            '#progress_message' => 'Uploading ...',
            '#required' => FALSE,
        ),
    );
    $form['settings']['page_title']['text_inside'] = array(
        '#type' => 'textarea',
        '#title' => t('Text Background Home Page'),
        '#default_value' => theme_get_setting('text_inside','oshop')
    );
    $form['settings']['page_title']['phone_number'] = array(
        '#type' => 'textarea',
        '#title' => t('Phone Number'),
        '#default_value' => theme_get_setting('phone_number','oshop')
    );
    $form['settings']['page_title']['email'] = array(
        '#type' => 'textarea',
        '#title' => t('Email Main'),
        '#default_value' => theme_get_setting('email','oshop')
    );
    $form['settings']['page_title']['coppy_right'] = array(
        '#type' => 'textarea',
        '#title' => t('Coppy Right'),
        '#default_value' => theme_get_setting('coppy_right','oshop')
    );
    $form['settings']['page_title']['header_layout'] = array(
        '#type' => 'select',
        '#title' => t('Header Layout'),
        '#options' => array(
            'header1' => t('Header Layout 1'),
            'header2' => t('Header Layout 2'),
            'header3' => t('Header Layout 3'),
            'header4' => t('Header Layout 4'),
            'header5' => t('Header Layout 5'),
            'header6' => t('Header Layout 6'),

           
        ),
        '#required' => true,
        '#default_value' => theme_get_setting('header_layout', 'oshop'),
    );






    $form['settings']['shop'] = array(
        '#type' => 'details',
        '#title' => t('Shop settings'),
        '#open' => FALSE,

    );

    $form['settings']['shop']['shop_sidebar'] = array(
        '#type' => 'select',
        '#title' => t('Shop Sidebar'),
        '#options' => array(
            'left' => t('Shop Sidebar Left'),
            'right' => t('Shop Sidebar Right'),
           
        ),
        '#required' => true,
        '#default_value' => theme_get_setting('shop_sidebar', 'oshop'),
    );
    $form['settings']['shop']['shop_detail'] = array(
        '#type' => 'select',
        '#title' => t('Shop Detail Style'),
        '#options' => array(
            'style1' => t('Shop Detail Style 1'),
            'style2' => t('Shop Detail Style 2'),
           
        ),
        '#required' => true,
        '#default_value' => theme_get_setting('shop_detail', 'oshop'),
    );

// Blog settings
    $form['settings']['blog'] = array(
        '#type' => 'details',
        '#title' => t('Blog settings'),
        '#open' => FALSE,

    );
    $form['settings']['blog']['blog_subtitle'] = array(
        '#type' => 'textarea',
        '#title' => t('Blog Subtitle'),
        '#default_value' => theme_get_setting('blog_subtitle', 'oshop'),
        '#description' => t(' blog Subtitle ')
    );


    $form['settings']['blog']['blog_sidebar'] = array(
        '#type' => 'select',
        '#title' => t('Blog Sidebar'),
        '#options' => array(
            'right' => t('Sidebar Right'),
            'left' => t('Sidebar Left'),
        ),
        '#required' => true,
        '#default_value' => theme_get_setting('blog_sidebar', 'oshop'),
    );



// custom css
    $form['settings']['custom_css'] = array(
        '#type' => 'details',
        '#title' => t('Custom CSS'),
        '#open' => FALSE,
    );

    $form['settings']['custom_css']['custom_css'] = array(
        '#type' => 'textarea',
        '#title' => t('Custom CSS'),
        '#default_value' => theme_get_setting('custom_css', 'oshop'),
        '#description' => t('<strong>Example:</strong><br/>h1 { font-family: \'Metrophobic\', Arial, serif; font-weight: 400; }')
    );




}

function oshop_theme_settings_form_submit(&$form, FormStateInterface $form_state) {
    $account = \Drupal::currentUser();
    $values = $form_state->getValues();

    $bg[0] = $values['default_breadcrumb_image']; 
    //$bg[1] = $values['footer_bg_image']; 
    // $bg[2] = $values['shop_breadcrumb_image'];
    // $bg[3] = $values['default_shop_breadcrumb_image'];
    // $bg[4] = $values['default_contact_breadcrumb_image'];
    // /*$bg[4] = $values['port_title_bg'];*/

    $count = count($bg);
    for ($i=0; $i < $count; $i++) {

    if (isset($bg[$i]) && !empty($bg[$i])) {
          // Load the file via file.fid.
        //   $file1 = file_load($bg[$i][0]);
        $file1 = File::load($bg[$i][0]);
          // Change status to permanent.
          $file1->setPermanent();
          $file1->save();
          $file_usage = \Drupal::service('file.usage');
          $file_usage->add($file1, 'oshop', 'theme', 1);
        } 
    }
        
}
?>