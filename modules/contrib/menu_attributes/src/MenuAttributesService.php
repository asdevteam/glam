<?php

namespace Drupal\menu_attributes;

use Drupal\Core\Entity\EntityTypeManagerInterface;

class MenuAttributesService {

  protected $entityTypeManager;

  public function __construct(EntityTypeManagerInterface $entityTypeManager) {
    $this->entityTypeManager = $entityTypeManager;
  }

  public function setAttributes($items) {
    // Your code to set menu attributes goes here.
  }

  public function getAttributes($menu_link_content_plugin) {
    // Your code to get menu attributes goes here.
  }

}
