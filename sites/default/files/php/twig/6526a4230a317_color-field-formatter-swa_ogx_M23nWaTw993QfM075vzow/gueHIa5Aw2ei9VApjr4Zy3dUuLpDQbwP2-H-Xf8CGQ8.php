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

/* modules/contrib/color_field/templates/color-field-formatter-swatch.html.twig */
class __TwigTemplate_0ff4cbb92c80916b3f422700fe29586c extends \Twig\Template
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
        // line 18
        echo "
";
        // line 19
        if ((($context["shape"] ?? null) == "triangle")) {
            // line 20
            echo "<div ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 20, $this->source), "html", null, true);
            echo " style=\"border-top: ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["width"] ?? null), 20, $this->source), "html", null, true);
            echo " solid ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["color"] ?? null), 20, $this->source), "html", null, true);
            echo "; border-right: ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["height"] ?? null), 20, $this->source), "html", null, true);
            echo " solid transparent;\"></div>
";
        } else {
            // line 22
            echo "<div  ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 22, $this->source), "html", null, true);
            echo " style=\"background-color: ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["color"] ?? null), 22, $this->source), "html", null, true);
            echo "; width: ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["width"] ?? null), 22, $this->source), "html", null, true);
            echo "; height: ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["height"] ?? null), 22, $this->source), "html", null, true);
            echo ";\"></div>
";
        }
    }

    public function getTemplateName()
    {
        return "modules/contrib/color_field/templates/color-field-formatter-swatch.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  56 => 22,  44 => 20,  42 => 19,  39 => 18,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Default theme implementation of a color swatch formatter.
 *
 * Available variables:
 * - color: The color background.
 * - width: The width of the color swatch.
 * - height: The height of the color swatch.
 * - shape: The shape of the color swatch.
 *
 * @see template_preprocess()
 * @see template_preprocess_color_field_formatter_swatch()
 *
 * @ingroup themeable
 */
#}

{% if shape == 'triangle' %}
<div {{ attributes }} style=\"border-top: {{ width }} solid {{ color }}; border-right: {{ height }} solid transparent;\"></div>
{% else %}
<div  {{ attributes }} style=\"background-color: {{ color }}; width: {{ width }}; height: {{ height }};\"></div>
{% endif %}
", "modules/contrib/color_field/templates/color-field-formatter-swatch.html.twig", "/var/www/html/modules/contrib/color_field/templates/color-field-formatter-swatch.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 19);
        static $filters = array("escape" => 20);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape'],
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
