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

/* __string_template__48e983b6e876a293403a48e049f2fc82 */
class __TwigTemplate_63b857bdabdc855479ca35ccadeddcaa extends \Twig\Template
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
        echo "    </li>
  </ul>
</div>
    </div>
    <div class=\"product-desc\"> <a href=\"";
        // line 5
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null), 5, $this->source), "html", null, true);
        echo "\" class=\"product-name\">
     ";
        // line 6
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 6, $this->source), "html", null, true);
        echo "
      </a>
      <span class=\"product-price\">
      ";
        // line 9
        $context["pr"] = twig_split_filter($this->env, $this->sandbox->ensureToStringAllowed(($context["price"] ?? null), 9, $this->source), ",");
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["pr"] ?? null), 0, [], "any", false, false, true, 9), 9, $this->source), "html", null, true);
        echo "  
      </span> 
    </div>
    <div class=\"product-btn hiden-variation fix-variations hidden-wishlist\">";
    }

    public function getTemplateName()
    {
        return "__string_template__48e983b6e876a293403a48e049f2fc82";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  55 => 9,  49 => 6,  45 => 5,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{# inline_template_start #}    </li>
  </ul>
</div>
    </div>
    <div class=\"product-desc\"> <a href=\"{{ url }}\" class=\"product-name\">
     {{ title }}
      </a>
      <span class=\"product-price\">
      {% set pr = price|split(',') %}{{ pr.0 }}  
      </span> 
    </div>
    <div class=\"product-btn hiden-variation fix-variations hidden-wishlist\">", "__string_template__48e983b6e876a293403a48e049f2fc82", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 9);
        static $filters = array("escape" => 5, "split" => 9);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set'],
                ['escape', 'split'],
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
