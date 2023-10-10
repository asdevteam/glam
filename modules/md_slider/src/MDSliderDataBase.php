<?php

/**
 * @file
 * Contains \Drupal\md_slider\MDSliderDataBase.
 */

namespace Drupal\md_slider;

use Drupal\Core\Database\Connection;
use Drupal\Core\Database\Query\SelectInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Database\Database;

class MDSliderDataBase {

  protected $database;

  // Constructor to store the database connection service.
  public function __construct(Connection $database) {
    $this->database = $database;
  }


  /**
   * @param $table
   * @param $field
   * @return \Drupal\Core\Database\StatementInterface|int|null
   */
  public static function insert($table, $field) {
    $return_value = NULL;
    try {
      $connection = Database::getConnection();
      $query = $connection->insert($table)
      ->fields($field);
      $return_value = $query->execute();
    //   $return_value = db_insert($table)
    //     ->fields($field)
    //     ->execute();
    }
    catch (\Exception $e) {
      drupal_set_message(t('db_insert failed. Message = %message, query= %query', array(
        '%message' => $e->getMessage(),
        '%query' => $e->query_string,
      )), 'error');
    }
    return $return_value;
  }

  public static function update($table, $fields, $conditions) {
    $count = 0;
    try {
      $connection = Database::getConnection();
      $query = $connection->update($table)
        ->fields($fields);
      foreach ($conditions as $field => $value) {
        $query->condition($field, $value);
      }
      $count = $query->execute();
    }
    catch (\Exception $e) {
      drupal_set_message(t('db_update failed. Message = %message, query= %query', array(
        '%message' => $e->getMessage(),
        '%query' => $e->query_string,
      )), 'error');
    }
    return $count;
  }
  /**
   * @param $table
   * @param array $entry
   */
  public static function load($table, $entry = array()) {
    $select = \Drupal::database()->select($table, 'table_alias');
    $select->fields('table_alias');
    foreach ($entry as $field => $value) {
      $select->condition($field, $value);
    }
    return $select->execute()->fetchAssoc();
  }

  /**
   * @param $table
   * @param array $entry
   * @param array $sort
   * @return array
   */
  public static function loadAll($table, $entry = array(), $sort = array()) {
    $query = \Drupal::database()->select($table, 'table_alias');
    $query->fields('table_alias');

    if (!empty($entry)) {
      foreach ($entry as $field => $value) {
        $query->condition($field, $value);
      }
    }

    if (!empty($sort)) {
      foreach ($sort as $field => $value) {
        $query->orderBy($field, $value);
      }
    }

    return $query->execute()->fetchAll();
  }


  public static function delete($table, $entry = array()) {
    $delete = db_delete($table);
    if (count($entry) > 0) {
      foreach ($entry as $field => $value) {
        $delete->condition($field, $value);
      }
    }
    return $delete->execute();
  }
}