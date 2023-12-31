<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/oshop/templates/field--comment.html.twig */
class __TwigTemplate_c324c34b2d1b6d2dabb6b7478c04320c extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 29
        $context["classes"] = [0 => "field", 1 => ("field--name-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 31
($context["field_name"] ?? null), 31, $this->source))), 2 => ("field--type-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 32
($context["field_type"] ?? null), 32, $this->source))), 3 => ("field--label-" . $this->sandbox->ensureToStringAllowed(        // line 33
($context["label_display"] ?? null), 33, $this->source)), 4 => "comment-wrapper"];
        // line 38
        $context["title_classes"] = [0 => "title", 1 => (((        // line 40
($context["label_display"] ?? null) == "visually_hidden")) ? ("visually-hidden") : (""))];
        // line 43
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 43), 43, $this->source), "html", null, true);
        echo ">
  ";
        // line 44
        if ((($context["comments"] ?? null) &&  !($context["label_hidden"] ?? null))) {
            // line 45
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 45, $this->source), "html", null, true);
            echo "
    <h5 class=\"mb-3\">";
            // line 46
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Product"));
            echo " <span class=\"text-theme\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Reviews"));
            echo " </span></h5>
    ";
            // line 47
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 47, $this->source), "html", null, true);
            echo "
  ";
        }
        // line 49
        echo "
  ";
        // line 50
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["comments"] ?? null), 50, $this->source), "html", null, true);
        echo "

  ";
        // line 52
        if (($context["comment_form"] ?? null)) {
            // line 53
            echo "    <h5 class = \"mt-5\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Add"));
            echo " <span class=\"text-theme\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("REVIEW"));
            echo "</span></h5>
    ";
            // line 54
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["comment_form"] ?? null), 54, $this->source), "html", null, true);
            echo "
  ";
        }
        // line 56
        echo "
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/oshop/templates/field--comment.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  92 => 56,  87 => 54,  80 => 53,  78 => 52,  73 => 50,  70 => 49,  65 => 47,  59 => 46,  54 => 45,  52 => 44,  47 => 43,  45 => 40,  44 => 38,  42 => 33,  41 => 32,  40 => 31,  39 => 29,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Theme override for comment fields.
 *
 * Available variables:
 * - attributes: HTML attributes for the containing element.
 * - label_hidden: Whether to show the field label or not.
 * - title_attributes: HTML attributes for the title.
 * - label: The label for the field.
 * - title_prefix: Additional output populated by modules, intended to be
 *   displayed in front of the main title tag that appears in the template.
 * - title_suffix: Additional title output populated by modules, intended to
 *   be displayed after the main title tag that appears in the template.
 * - comments: List of comments rendered through comment.html.twig.
 * - comment_form: The 'Add new comment' form.
 * - comment_display_mode: Is the comments are threaded.
 * - comment_type: The comment type bundle ID for the comment field.
 * - entity_type: The entity type to which the field belongs.
 * - field_name: The name of the field.
 * - field_type: The type of the field.
 * - label_display: The display settings for the label.
 *
 * @see template_preprocess_field()
 * @see comment_preprocess_field()
 */
#}
{%
  set classes = [
    'field',
    'field--name-' ~ field_name|clean_class,
    'field--type-' ~ field_type|clean_class,
    'field--label-' ~ label_display,
    'comment-wrapper',
  ]
%}
{%
  set title_classes = [
    'title',
    label_display == 'visually_hidden' ? 'visually-hidden',
  ]
%}
<div{{ attributes.addClass(classes) }}>
  {% if comments and not label_hidden %}
    {{ title_prefix }}
    <h5 class=\"mb-3\">{{'Product'|t}} <span class=\"text-theme\">{{'Reviews'|t}} </span></h5>
    {{ title_suffix }}
  {% endif %}

  {{ comments }}

  {% if comment_form %}
    <h5 class = \"mt-5\">{{'Add'|t}} <span class=\"text-theme\">{{'REVIEW'|t}}</span></h5>
    {{ comment_form }}
  {% endif %}

</div>
", "themes/oshop/templates/field--comment.html.twig", "/var/www/html/themes/oshop/templates/field--comment.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 29, "if" => 44);
        static $filters = array("clean_class" => 31, "escape" => 43, "t" => 46);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape', 't'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
