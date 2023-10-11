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

/* themes/oshop/templates/block/block--simplenews.html.twig */
class __TwigTemplate_bab1bd13e488e6a759597e9bb20cf074 extends \Twig\Template
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
        // line 1
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 1, $this->source), "html", null, true);
        echo ">
    <div class=\"container simple-new\">
      <div class=\"row\">
         
            ";
        // line 5
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 5, $this->source), "html", null, true);
        echo "
             ";
        // line 6
        if (($context["label"] ?? null)) {
            // line 7
            echo "             <div class=\"col-lg-4 col-md-12 \">
                <h2 class = \"title\"";
            // line 8
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_attributes"] ?? null), 8, $this->source), "html", null, true);
            echo ">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 8, $this->source), "html", null, true);
            echo "<span>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["sub_title"] ?? null), 8, $this->source), "html", null, true);
            echo "</span></h2>
              </div>
             ";
        }
        // line 11
        echo "             ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 11, $this->source), "html", null, true);
        echo "
    ";
        // line 12
        if (($context["content"] ?? null)) {
            // line 13
            echo "  
    <div class=\"col-lg-8 col-md-12 \">
      ";
            // line 15
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 15, $this->source), "html", null, true);
            echo "
 
    </div>
    ";
        }
        // line 19
        echo "  </div>
    </div>
  </div>";
    }

    public function getTemplateName()
    {
        return "themes/oshop/templates/block/block--simplenews.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  84 => 19,  77 => 15,  73 => 13,  71 => 12,  66 => 11,  56 => 8,  53 => 7,  51 => 6,  47 => 5,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div{{ attributes }}>
    <div class=\"container simple-new\">
      <div class=\"row\">
         
            {{ title_prefix }}
             {% if label %}
             <div class=\"col-lg-4 col-md-12 \">
                <h2 class = \"title\"{{ title_attributes }}>{{ label }}<span>{{ sub_title }}</span></h2>
              </div>
             {% endif %}
             {{ title_suffix }}
    {% if content %}
  
    <div class=\"col-lg-8 col-md-12 \">
      {{ content }}
 
    </div>
    {% endif %}
  </div>
    </div>
  </div>", "themes/oshop/templates/block/block--simplenews.html.twig", "/var/www/html/themes/oshop/templates/block/block--simplenews.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 6);
        static $filters = array("escape" => 1);
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
