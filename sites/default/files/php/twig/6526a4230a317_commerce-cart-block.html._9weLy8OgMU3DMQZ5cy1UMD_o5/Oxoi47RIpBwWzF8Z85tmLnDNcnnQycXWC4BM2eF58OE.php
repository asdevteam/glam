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

/* themes/oshop/templates/commerce-cart-block.html.twig */
class __TwigTemplate_ffc0cc702e133db3e6f69d04276e61e7 extends \Twig\Template
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
        echo "<div>
    <div class=\"cart\">
  <div class=\"cart-block--summary\">
    <a class=\"cart-block--link__expand\" id = \"header-cart-btn\">
      <span class=\"cart-badge\">";
        // line 5
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["count"] ?? null), 5, $this->source), "html", null, true);
        echo "</span> <i class=\"ti-bag\"></i>
    </a>
  </div>
  ";
        // line 8
        if (($context["content"] ?? null)) {
            // line 9
            echo "        ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 9, $this->source), "html", null, true);
            echo "
        <ul class=\"js-add-to-cart hidden\">
            <li class = \"btn btn-white container text-center\">   
               ";
            // line 12
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["links"] ?? null), 12, $this->source), "html", null, true);
            echo "
           </li>
        </ul>
  ";
        }
        // line 16
        echo "
</div>
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/oshop/templates/commerce-cart-block.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  67 => 16,  60 => 12,  53 => 9,  51 => 8,  45 => 5,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div>
    <div class=\"cart\">
  <div class=\"cart-block--summary\">
    <a class=\"cart-block--link__expand\" id = \"header-cart-btn\">
      <span class=\"cart-badge\">{{ count }}</span> <i class=\"ti-bag\"></i>
    </a>
  </div>
  {% if content %}
        {{ content }}
        <ul class=\"js-add-to-cart hidden\">
            <li class = \"btn btn-white container text-center\">   
               {{ links }}
           </li>
        </ul>
  {% endif %}

</div>
</div>
", "themes/oshop/templates/commerce-cart-block.html.twig", "/var/www/html/themes/oshop/templates/commerce-cart-block.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 8);
        static $filters = array("escape" => 5);
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
